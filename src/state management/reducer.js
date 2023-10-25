export const defaultState = {
    results: [],
    tracks: {albumId: '', list: []},
    nextUrl: null,
    prevUrl: null,
    loading: false,
    total: 0
}

const actions = {
    SET_RESULTS : 'SET_RESULTS',
    SET_TRACKS : 'SET_TRACKS',
    LOAD_STATE : 'LOAD_FALSE',
    NEXT_URL : 'NEXT_URL',
    PREV_URL : 'PREV_URL',
    SET_TOT: 'SET_TOT'
}

export const {SET_RESULTS, SET_TRACKS, LOAD_STATE, NEXT_URL, PREV_URL, SET_TOT} = actions;

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_RESULTS : return {...state, results: action.payload};
        case SET_TRACKS : return {...state, tracks: action.payload};
        case NEXT_URL : return {...state, nextUrl: action.payload};
        case PREV_URL : return {...state, prevUrl: action.payload};
        case LOAD_STATE : return {...state, loading: !state.loading};
        case SET_TOT : return {...state, total : action.payload}
    }
}
