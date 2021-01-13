import {SET_WISHLIST} from "../action-types";

const initialState = {
    wishlist : []
}

export const wishlist = (state = initialState, action) => {

    switch(action.type) {
        case SET_WISHLIST : {
            const updatedWishlist = state.wishlist.filter(el => el.id !== action.payload.id);
            if(updatedWishlist.length === state.wishlist.length) updatedWishlist.push(action.payload);
            return {...state, wishlist: updatedWishlist}
        }
        default : {
            return state;
        }
    }
}
