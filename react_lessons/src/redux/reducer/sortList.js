import {SET_SORTLIST} from "../action-type";

const initialState = {
    sortList : []
};

export const sortList = (state = initialState, action) => {
    switch(action.type) {
        case SET_SORTLIST :
            const updatedSortList = state.sortList.filter(el => el !== action.payload)
            if(updatedSortList.length === state.sortList.length) updatedSortList.push(action.payload);
            return {...state, sortList : updatedSortList};
        default :
            return state;
    }
}


