import * as fs from 'fs';

import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { config } from '../../common/config';
import { logger } from '../../common/logger';
import { CardFactory } from 'botbuilder';

export class EligibilityIdCardService {
    constructor() {
    };

    async getIdCardTypes(memberId: string, token: string, token2: string) {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}IDCard/api/types/${memberId}?includeCardTypesForAllMembers=false`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
        }).then(this.checkStatus);

        return response;
    }

    public async getIDCardResponse(
        idCardType: any,
        consumerProfile: IConsumerProfile,
        token: string,
        token2: string
    ): Promise<{ message: string | any, success: boolean }> {
        if (idCardType.id === 3) {
            const urls = [, , ,
                ['https://websolutionscdn.blob.core.windows.net/membermobile/idcards-png/Assist_America_frontSide.png',
                    'https://websolutionscdn.blob.core.windows.net/membermobile/idcards-png/Assist_America_backSide.png'],
                // TODO: UPATE FOR 4
                [,] // for future possible updates...
            ];

            let attachments = [CardFactory.adaptiveCard({
                'type': 'AdaptiveCard',
                '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',
                'version': '1.3',
                'body': [
                    {
                        'type': 'Image',
                        'url': urls[idCardType.id][0]
                    },
                    {
                        'type': 'Image',
                        'url': urls[idCardType.id][1]
                    }
                ]
            })];
            return { message: { attachments }, success: true };
        } if (idCardType.id === 4) {
            // const contentId = idCardType.id === 3 ? 2248 : 2247;
            const contentId = 2247;
            // TODO: handle unsuccess case or use hardcoded URL
            return this.getFirstValueOfCmsContent(contentId, token)    // solution with UmbracoCMS service
                .then(cardFromcms => {
                    const url = cardFromcms.split('href="')[1].split('"')[0];
                    // option 1) send message with link to file
                    // return `Click [this link](${url}) to load your *${idCardType.name}*`;
                    // option 2) send attachment with image in chant window
                    const attachments = [{
                        contentType: 'application/pdf',
                        contentUrl: url,
                        name: `Download ${idCardType.name} card`,
                    }];
                    return { message: { attachments }, success: true };
                });
        } else {
            const idCardDetails = {
                medicalSubscriberId: '',
                dentalSubscriberId: '',
                hasVisionInMedical: false,
            };
            idCardDetails.medicalSubscriberId = consumerProfile.mc400MemberId
                ? consumerProfile.mc400MemberId
                : '';
            idCardDetails.dentalSubscriberId = consumerProfile.dentalVisionMemberId
                ? consumerProfile.dentalVisionMemberId
                : '';
            idCardDetails.hasVisionInMedical = consumerProfile.hasNva;
            const subscriberId: string = this.getSubscriberNumber(idCardType, idCardDetails);
            let faceCardRequest = this.getCard(this.getIdCardEndPoint(idCardType.id, subscriberId, 'front'), token, token2);
            let backCardRequest = this.getCard(this.getIdCardEndPoint(idCardType.id, subscriberId, 'back'), token, token2);

            return await Promise.all([   // TODO: update logic for allSettled method
                faceCardRequest,
                backCardRequest
            ]).catch(async (err) => {
                return [];
            })
                .then(async (responses: any[]) => {
                    let message: string | {};
                    if (responses[0]) {
                        const attachments: any[] = await Promise.all(
                            responses.map(async (response) => {
                                let blob: any;
                                let idCardData: string;
                                if (response.headers && response.headers.get("content-type").includes('image/png')) {
                                    blob = await response.arrayBuffer();
                                    idCardData = `data:image/png;base64,${Buffer.from(blob).toString('base64')}`;
                                    let sizeInBytes = 4 * Math.ceil((Buffer.from(blob).toString('base64').length / 3)) * 0.5624896334383812;
                                    // NOTE: `if` block below not neede (and not finished) currently.
                                    // but if during testing it turns out that there are cards that exceed the allowable size, then we will need to complete these blocks
                                    if (sizeInBytes / 1024 > 200) { // attachment cannot be larger than 250kb. Therefore, if during the testing process it turns out that the cards can be larger, then it is necessary to implement a suitable method for transferring the card. Now left just as a blank
                                        let buff = Buffer.from(blob);
                                        fs.writeFile('./public/' + idCardType.name + '.png', buff, err => {
                                            if (err) throw err;
                                        });
                                        idCardData = 'TODO'; // link to shared file: host + /cards/ + name
                                    }
                                } else {
                                    blob = await response;
                                    idCardData = `data:image/png;base64,${blob}`;
                                    let sizeInBytes = 4 * Math.ceil((blob.length / 3)) * 0.5624896334383812;
                                    // NOTE: `if` block below not neede (and not finished) currently.
                                    // but if during testing it turns out that there are cards that exceed the allowable size, then we will need to complete these blocks
                                    if (sizeInBytes / 1024 > 200) { // attachment cannot be larger than 250kb. Therefore, if during the testing process it turns out that the cards can be larger, then it is necessary to implement a suitable method for transferring the card. Now left just as a blank
                                        let buff = Buffer.from(blob, 'base64')
                                        fs.writeFile('./public/' + idCardType.name + '.png', buff, err => {
                                            if (err) throw err;
                                        });
                                        // idCardData = 'TODO'; // link to shared file: host + /cards/ + name
                                    }
                                }
                                return this.getIDCardsCard(idCardData);
                                // return {
                                //     attachments: [
                                //         {
                                //             contentType: 'image/png',
                                //             contentUrl: idCardData
                                //         }
                                //     ]
                                // };
                            })
                        )
                        message = { attachments: attachments };
                        return { message: message, success: true };
                    } else {
                        // message = `Your ${idCardType.name} ID card is currently unavailable`;
                        message = `The ID card you requested is currently unavailable.`;
                        return { message: message, success: false };
                    }
                })
        }
    }

    async getCard(endpoint: string, token: string, token2: string) {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = endpoint;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
        }).then(this.checkStatus);
        return response;
    }

    getIdCardEndPoint(typeId: number, memberId: string, side: string = 'front'): string {
        // side = 'front' | 'back' | 'both'
        let url = '';
        let format = 'png';     // png/pdf/jpeg
        let device = 'mobile';  // 'mobile' (good option) or 'web' (image shifted to the right - bad option)
        switch (typeId) {
            case 0:
                url = `${config.baseURL}IdCard/api/idcards/${memberId}/${format}/${side}?isBase64format=true`;
                // GET /api/idcards/{memberId}/{format}/{side}
                break;
            case 1:
                // IDCard/api/DentalIDCards/{memberId}/{format}[?device][&face][&api-version]
                url = `${config.baseURL}IdCard/api/DentalIDCards/${memberId}/${format}?face=${side}&device=${device}`;
                break;
            case 2:
                // IDCard/api/visionidcards/{memberId}/{format}[?device][&face]
                url = `${config.baseURL}IDCard/api/visionidcards/${memberId}/${format}?face=${side}&device=${device}`;
                break;
            default:
                url = '';
                break;
        }
        return url;
    }

    getSubscriberNumber(selectedValue, idCardDetails) {
        let subscriberId = '';
        switch (selectedValue.id) {
            case 0:
                subscriberId = idCardDetails.medicalSubscriberId;
                break;
            case 1:
                subscriberId = idCardDetails.dentalSubscriberId;
                break;
            case 2:
                if (idCardDetails.hasVisionInMedical) {
                    subscriberId = idCardDetails.medicalSubscriberId;
                } else {
                    subscriberId = idCardDetails.dentalSubscriberId;
                }
                break;
            default:
                subscriberId = '';
                break;
        }
        return subscriberId;
    }

    async getContent(id: number | string, token: string) {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}UmbracoCMS/api/ContentData/${id}`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: config.headers
        }).then(this.checkStatus);
        return response;
    }

    private async getFirstValueOfCmsContent(id: number, token: string): Promise<any> {
        return this.getContent(id, token).then(data => {
            let result: string;
            data.contents.forEach(content => {
                for (const key in content.value) {
                    if (content.value.hasOwnProperty(key)) {
                        result = content.value[key];
                        break;
                    }
                }
            });
            return result;
        });
    }

    getIDCardsCard(json) { // TODO maybe need to show all kinds of user's cards, not only Medical
        const imageBase64 = json;
        const medicalIDCard = {
            'type': 'AdaptiveCard',
            'body': [
                {
                    'type': 'Image',
                    // 'url': 'data:image/png;base64,' + imageBase64,
                    'url': imageBase64,
                    'height': '210',
                    'width': '334'
                }
            ],
            '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',
            'version': '1.0'
        };
        return CardFactory.adaptiveCard(medicalIDCard);
    }

    checkStatus(res: Response): any {
        if (res.ok) { // res.status >= 200 && res.status < 300
            if (res.headers.get("content-type") === 'image/png') {
                return res;
            } else {
                return res.json();
            }
        } else {
            logger.error(res.status + ': ' + res.statusText + ' ' + res.url);
            throw new Error(res.status + ': ' + res.statusText);
        }
    }
}
