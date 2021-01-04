import products from "./products";
import cart from "./cart";
import wishlist from "./wishlist";
import {combineReducers} from "redux";

export const reducer = combineReducers({
    products,
    cart,
    wishlist
});
