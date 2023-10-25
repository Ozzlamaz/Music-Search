import {getData} from "../axios/instances/get data/getData";

const getTracks = async (albumId, dispatchers) => {
    const {setLoad, setTracks} = dispatchers;

    setLoad() //loading true
    const tracks = await getData(`https://api.spotify.com/v1/albums/${albumId}/tracks`);
    if(tracks) {
        setLoad() //loading flase
        setTracks(tracks);
    }
}


export default getTracks;