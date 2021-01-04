import products from "./products";
import {combineReducers} from "redux";

export const reducer = combineReducers({
    products,
    cart,
    wishlist
});
