import axios from 'axios';
import getToken from './getToken';

export const getData = axios.create();

//Intercerptor
getData.interceptors.request.use(
    async (request) => {
        //check token expiration
        let token = JSON.parse(localStorage.getItem('musicSearch'));
        let currentTime = parseInt(new Date().getTime());
        let tokenExpTime = parseInt(token.tokenExp);
        if((currentTime - tokenExpTime) >= 0 ) {
            const response = await getToken();
            const {access_token, expires_in} = response.data;
            const newTokenExp = currentTime + parseInt(expires_in);
            localStorage.setItem('musicSearch', JSON.stringify({spotToken: access_token, tokenExp: newTokenExp}));
            token = JSON.parse(localStorage.getItem('musicSearch'));
        }
        //
        request.headers.Authorization = 'Bearer ' + token.spotToken
        return request
    },

    (error) => {
        return Promise.reject(error);
    }
);

getData.interceptors.response.use(
    (response) => {
        if(response.status === 200) {
            if(response.data.hasOwnProperty('tracks')) {
                return response.data
            }
            //API response may vary
            return response.data.albums || response.data.artists || response.data;
        }
    },
    
    (error) => {
        if (error.response.status === 400) {
            return {error: 'a bug in the api caused this, messing with total pagination pages'}
        }
    }
);
