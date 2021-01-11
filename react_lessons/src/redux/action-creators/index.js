import {SET_PRODUCTS, SET_CART, SET_WISHLIST} from "../action-types";

export const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
export const setCart = (payload) => ({type: SET_CART, payload});
export const setWishlist = (payload) => ({type:SET_WISHLIST, payload})
