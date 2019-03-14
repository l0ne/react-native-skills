export const APP_ID = 'B5A2A54F-0C43-7353-FF6B-4175662CE800';
export const REST_API_KEY = '16D8E28E-DAB5-EA91-FFC6-A65B571DBE00';

export const REST_API = `https://api.backendless.com/${APP_ID}/${REST_API_KEY}`;

export const REST_END = {
    user: REST_API + '/data/users/',
    login: REST_API + '/users/login'
}
