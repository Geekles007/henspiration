export type TOption = {
    url: string;
    headers: {
        'Authorization': string;
    },
    form: {
        "grant_type": string;
    },
    json: boolean;
}
