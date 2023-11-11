import { getData } from "../../axios/instances/get data/getData";

const getResults = async ({params}) => {
    const { inputParam, filterParam, artistIdParam, offsetParam } = params;
    let url;
    if(artistIdParam) {
        url = `https://api.spotify.com/v1/artists/${artistIdParam}/albums?offset=${offsetParam}&limit=12`;
    } else {
        url = `https://api.spotify.com/v1/search?q=${inputParam}&type=${filterParam}&offset=${offsetParam}&limit=12`;
    };

    const response = await getData(url);
    if(!response) {
        throw Error ('Could not find anything, try refreshing the page');
    }

    const results = response.items;
    const total = response.total;
    
    return {results, total};
}

export default getResults