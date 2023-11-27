import axios from 'axios'

const url = "https://accounts.spotify.com/api/token";

const getToken = async () => {

    try {
        const response = await axios(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(import.meta.env.VITE_CLIENT_ID + ':' + import.meta.env.VITE_CLIENT_SECRET)
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