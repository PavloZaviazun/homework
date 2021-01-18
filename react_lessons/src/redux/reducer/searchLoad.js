import {SET_SEARCHLOAD} from "../action-type";

const initialState = {
    searchLoad : false
};

export const searchLoad = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCHLOAD :
            return {...state, searchLoad: action.payload};
        default :
            return state;
    }
}
