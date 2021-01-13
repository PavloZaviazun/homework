import {combineReducers} from "redux";
import {cart} from "./cart";
import {product} from "./product";
import {wishlist} from "./wishlist";
import {flag} from "./flag";
import {shade} from "./shade";

export const reducer = combineReducers({
    cart,
    product,
    wishlist,
    flag,
    shade
})
