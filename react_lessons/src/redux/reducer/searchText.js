import {SET_SEARCHTEXT} from "../action-type";

const initialState = {
    searchText : ""
};

export const searchText = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCHTEXT :
            return {...state, searchText: action.payload};
        default :
            return state;
    }
}
