import fetch from 'node-fetch';
import { reporter } from './reporter.service.js';

class Request {
    jsonHeaders = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    urlSearchParamsHeaders = {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };

    activityHeaders = {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };

    url = '';

    setBearerToken(accessToken) {
        this.jsonHeaders['Authorization'] = `Bearer ${accessToken}`;
    }

    setURL(chatId) {
        this.url = `https://directline.botframework.com/v3/directline/conversations/${chatId}/activities`;
    }

    async GET(url, headers = this.jsonHeaders) {
        try {
            var response = await fetch(url, { headers: headers });
        } catch (e) {
            console.log(`error while sending GET ${url}: ${e}`);
        }
        let json = await this.parseJsonFrom(response);

        reporter.requestHistory.push({
            method: 'GET',
            url: url,
            status: response.status,
            json: JSON.stringify(json),
        });

        return { response, json };
    }

    async GETBLOB(url, headers = this.jsonHeaders) {
        try {
            var response = await fetch(url, { headers: headers 
            }).then(async (response) => {
                const blob = await response.arrayBuffer();
                return `data:application/pdf;base64,${Buffer.from(blob).toString('base64')}`;
            }).catch(err => {
                logger.error(err.status + ': ' + err.statusText + ' ' + err.url);
                return null;
            });
        } catch (e) {
            console.log(`error while sending GET ${url}: ${e}`);
        }

        reporter.requestHistory.push({
            method: 'GET',
            url: url,
            response: response
        });
        
        return response;
    }

    async GETactivity(url, headers = this.jsonHeaders, watermark) {

        const activityHeaders = {
            'Upgrade': 'websocket',
            'Connection': 'upgrade',
        };

        headers = {...headers, ...activityHeaders};

        url = `${this.url}?watermark=${watermark}`;

        try {
            var response = await fetch(url, { headers: headers });
        } catch (e) {
            console.log(`error while sending GET ${url}: ${e}`);
        }
        let json = await this.parseJsonFrom(response);

        reporter.requestHistory.push({
            method: 'GET',
            url: url,
            status: response.status,
            json: JSON.stringify(json),
        });

        return { response, json };
    }

    async POST(url, body, headers = this.jsonHeaders) {
        
        try {
            var response = await fetch(url, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify(body),
            });
        } catch (e) {
            console.log(`error while sending POST ${url}: ${e}`);
        }
        let json = await this.parseJsonFrom(response);
        
        reporter.requestHistory.push({
            method: 'POST',
            url: url,
            body: JSON.stringify(body),
            status: response.status,
            json: JSON.stringify(json),
        });
        
        return { response, json };
    }

    async POSTurlSearchParams(url, body, headers = this.urlSearchParamsHeaders) {

        try {
            var response = await fetch(url, {
                headers: headers,
                method: 'POST',
                body: body,
            });
        } catch (e) {
            console.log(`error while sending POST ${url}: ${e}`);
        }
        let json = await this.parseJsonFrom(response);
        
        reporter.requestHistory.push({
            method: 'POST',
            url: url,
            body: JSON.stringify(body),
            status: response.status,
            json: JSON.stringify(json),
        });
        
        return { response, json };
    }

    async POSTmessage(url = this.url, body, headers = this.jsonHeaders) {
       
        try {
            var response = await fetch(url, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify(body),
            });
        } catch (e) {
            console.log(`error while sending POST ${url}: ${e}`);
        }
        let json = await this.parseJsonFrom(response);
        
        reporter.requestHistory.push({
            method: 'POST',
            url: url,
            body: JSON.stringify(body),
            status: response.status,
            json: JSON.stringify(json),
        });
        
        return { response, json };
    }

    async parseJsonFrom(response) {
        if (!response) return;
        if (response.headers.get('Content-Length') == 0) {
            return '<Response body is empty>';
        }
        try {
            return await response.json();
        } catch (e) {
            console.log(`parseJsonFrom() function error: ${e}`);
        }
    }

    async parseTextFrom(response) {
        if (!response) return;
        try {
            return await response.text();
        } catch (e) {
            console.log(`parseTextFrom() function error: ${e}`);
        }
    }
}

export default Request;
