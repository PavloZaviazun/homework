import {SET_SORTLIST} from "../action-type";
import {act} from "@testing-library/react";

const initialState = {
    sortList : []
};

export const sortList = (state = initialState, action) => {
    console.log(state)
    switch(action.type) {
        case SET_SORTLIST :
            let updatedList = state.sortList.push(action.payload);
            // console.log(updatedList);
            return {...state, sortList: updatedList};
        default :
            return state;
    }
}
