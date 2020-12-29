import {REMOVE_WISHLIST, SET_WISHLIST} from "../action-types";

const initialState = {
    wishlist: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_WISHLIST : {
            console.log(action.payload.id)
            console.log(state.wishlist)
            const updatedWishList = state.wishlist.filter(
                tovar => tovar.id !== action.payload.id
            );
            if(updatedWishList.length === state.wishlist.length) {
                updatedWishList.push(action.payload)
            }
            console.log(updatedWishList)
            return {...state, wishlist : updatedWishList}
        }
        case REMOVE_WISHLIST : {

        }
        default: {
            return state;
        }
    }
}
