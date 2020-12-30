import {SET_WISHLIST} from "../action-types";

const initialState = {
    wishlist: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_WISHLIST : {

            const updatedWishList = state.wishlist.filter(
                tovar => tovar.id !== action.payload.id
            );
            if(updatedWishList.length === state.wishlist.length) {
                updatedWishList.push(action.payload)
            }
            return {...state, wishlist : updatedWishList}
        }

        default: {
            return state;
        }
    }
}
