import {getData} from "../axios/instances/get data/getData";

const getAlbums = async (artistId, offsetParam, dispatchers) => {
    const {setLoad, setResults, setTotal} = dispatchers;
    setLoad() //loading true
    const resultsType = await getData(`https://api.spotify.com/v1/artists/${artistId}/albums?offset=${offsetParam}&limit=12`);
    if(resultsType) {
        setLoad() // loading false
        setResults(resultsType.items);
        setTotal(resultsType.total);
    }
}

export default getAlbums;