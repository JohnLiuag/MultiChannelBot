interface IApi {
    microServicesUrl: string;
}

export class ApiService {
    private static instance: ApiService;
    microServicesUrl: string;

    constructor(env) {
        if (ApiService.instance) {
            return ApiService.instance;
        }
        ApiService.instance = this;
        // TODO: implement configurable hosts for APIs
        this.microServicesUrl = `https://apitst.upmchp.com/${env}.`
    }
}
