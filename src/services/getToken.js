import axios from 'axios'

const clientId = 'a81850de04b941a9bf47df9a6ff243c2';
const clientSecret = '54b27539c54144fb922bba44d208c858';

const url = "https://accounts.spotify.com/api/token";

const getToken = async () => {

    try {
        const response = await axios(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            data : 'grant_type=client_credentials'
        })

        if(response.status === 200) {
            return response;
        }

    } catch (error) {
        console.log(error)
    }
}

export default getToken