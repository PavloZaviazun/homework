import {SET_SEARCHPAGINATION} from "../action-type";

const initialState = {
    searchPagination : []
};

export const searchPagination = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCHPAGINATION :
            return {...state, searchPagination: action.payload};
        default :
            return state;
    }
}
