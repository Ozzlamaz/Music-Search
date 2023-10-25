import {getData} from "../axios/instances/get data/getData";

const getSearchResults = async (inputParam, filterParam, offsetParam, dispatchers) => {
    const {setLoad, setResults, setTotal} = dispatchers;
    setLoad() //loading true
    const resultsType = await getData(`https://api.spotify.com/v1/search?q=${inputParam}&type=${filterParam}&offset=${offsetParam}&limit=12`);
    if(resultsType) {
        setLoad()//loading false
        setResults(resultsType.items);
        setTotal(resultsType.total);
    }

}

export default getSearchResults;