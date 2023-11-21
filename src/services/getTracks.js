import {getData} from "./getData";

const getTracks = async (id, setAlbum) => {

    const url = `https://api.spotify.com/v1/albums/${id}`;
    
    const album = await getData(url);
    
    setAlbum({item: album, albumId: album.id, tracksList: album.tracks.items})
    
}


export default getTracks;