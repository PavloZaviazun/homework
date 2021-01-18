import {SET_GENRES} from "../action-type";

const initialState = {
    genres : []
};

export const genres = (state = initialState, action) => {
    switch(action.type) {
        case SET_GENRES :
            return {...state, genres: action.payload};
        default :
            return state;
    }
}
