import {REMOVE_WISHLIST, SET_PRODUCTS, SET_WISHLIST} from "../action-types";

export const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
export const setWishList = (payload) => ({type: SET_WISHLIST, payload});
export const removeWishList = (payload) => ({type: REMOVE_WISHLIST, payload});
