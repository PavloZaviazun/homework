import {combineReducers} from "redux";
import {cart} from "./cart";
import {product} from "./product";
import {wishlist} from "./wishlist";
import {flag} from "./flag";

export const reducer = combineReducers({
    cart,
    product,
    wishlist,
    flag
})
