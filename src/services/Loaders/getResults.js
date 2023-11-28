import { getData } from "../getData";

const getResults = async ({params}) => {
    const { inputParam, filterParam, artistIdParam, offsetParam } = params;

    let url;
    if(artistIdParam) {
        url = `https://api.spotify.com/v1/artists/${artistIdParam}/albums?${offsetParam}&limit=12`;
    } else {
        url = `https://api.spotify.com/v1/search?q=${inputParam}&type=${filterParam}&${offsetParam}&limit=12`;
    };

    const response = await getData(url);

    if(!response) {
        throw Error ('Could not find anything, try refreshing the page');
    }

    const results = response.items;
    if(results.length === 0) {
        throw Error ("This page doesn't have any results due to bad database, press the button to go back")
    }
    const total = response.total;
    
    return {results, total};
}

export default getResults