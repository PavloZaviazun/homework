import {SET_FLAG} from "../action-types";

const initialState = {
    flag : false
}

export const flag = (state = initialState, action) => {
    switch(action.type) {
        case SET_FLAG : {
            state.flag = action.payload;
         return {...state}
        }
        default:
            return state;
    }
}
