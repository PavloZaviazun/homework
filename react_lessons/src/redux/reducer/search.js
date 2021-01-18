import {SET_SEARCH} from "../action-type";

const initialState = {
    search : []
};

export const search = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH :
            return {...state, search: action.payload};
        default :
            return state;
    }
}
