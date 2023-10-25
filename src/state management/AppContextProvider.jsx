//react hooks
import {createContext, useReducer, useEffect} from 'react';
//
import {defaultState} from './reducer';
import {reducer} from './reducer';
//dispatch actions
import { SET_RESULTS, SET_TRACKS, LOAD_STATE, NEXT_URL, PREV_URL, SET_TOT } from './reducer';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, defaultState);

    //dispatchers
    const setLoad = () => {
        dispatch({type: LOAD_STATE});
    };
    
    const setResults = (data) => {
        dispatch({type: SET_RESULTS, payload: data});
    };
    
    const setTracks = (data) => {
        dispatch({type: SET_TRACKS, payload: data});
    };
    
    const setNextUrl = (data) => {
        dispatch({type: NEXT_URL, payload: data})
    };
    
    const setPrevUrl = (data) => {
        dispatch({type: PREV_URL, payload: data})
    };

    const setTotal = (data) => {
        dispatch({type: SET_TOT, payload: data})
    }
    
    const dispatchers ={
        setLoad: setLoad,
        setResults: setResults,
        setTracks: setTracks,
        setNextUrl: setNextUrl,
        setPrevUrl: setPrevUrl,
        setTotal : setTotal
    }

    //initial authorization
    useEffect(() => {
        if(!localStorage.musicSearch) {
            localStorage.setItem("musicSearch", JSON.stringify({spotToken: '', tokenExp: new Date().getTime()}))
        }
    },[]);

    return (
        <AppContext.Provider value = {{state, dispatchers}} >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider