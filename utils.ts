import config from './config/config';

//Builds a url based on an object input
export const buildUrl = (obj: Record<string, any>, run = true): string => {
    let url = `${config.redirect_domain}`; //Builds a url based on domain set in the config file

    if (run) {
        url += '?';

        ['_id', 'pk', '__v', 'clicks'].forEach((e) => delete obj[e]); //Delete MongoDB native values
        const array = Object.keys(obj);
        const length = array.length;

        //Builds the url based on the key-value pair. Checks if its the last element then removes the last &
        array.forEach((element, index) => {
            url += `${element}=${obj[element]}&`;
            if (index == length - 1) {
                url = url.slice(0, -1);
            }
        });
    }
    return url;
};
