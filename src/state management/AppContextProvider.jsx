//react hooks
import {createContext, useEffect, useState} from 'react';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

    const [album, setAlbum] = useState({item: {}, albumId: '', tracksList: []});

    const state = {
        album,
        setAlbum
    }

    //initial authorization
    useEffect(() => {
        if(!localStorage.musicSearch) {
            localStorage.setItem("musicSearch", JSON.stringify({spotToken: '', tokenExp: new Date().getTime()}))
        }
    },[]);

    return (
        <AppContext.Provider value = {{state}} >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider