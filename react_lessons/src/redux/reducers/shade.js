import {SET_SHADE} from "../action-types";

const initialState = {
    shade: 0
}

export const shade = (state = initialState, action) => {
    switch(action.type) {
        case SET_SHADE : {
            state.shade = action.payload;
            return {...state};
        }
        default : {
            return state;
        }
    }

}
