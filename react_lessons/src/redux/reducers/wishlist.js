import {SET_WISHLIST} from "../action-types";

const initialState = {
    wishlist : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_WISHLIST :
            const updatedWishlist = state.wishlist.filter(
                tovar => tovar.id !== action.payload.id
            )
            if(updatedWishlist.length === state.wishlist.length) updatedWishlist.push(action.payload);
            return {...state, wishlist: updatedWishlist};
        default:
            return state;
    }
}
