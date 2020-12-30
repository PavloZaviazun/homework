import React from 'react';
import {useSelector} from "react-redux";

export function Header() {
    const {cart:{cart}, wishlist:{wishlist}} = useSelector(state => state);
    let summaWishList = wishlist.reduce((acc, curValue) => {
        return acc + curValue.price
    },0)
    let summaCart = cart.reduce((acc, curValue) => {
        return acc + curValue.price
    },0)

    return(
        <header>
            <h2>Welcome to our shop</h2>
            <div>
            <div title={summaWishList.toFixed(2)}>Wishlist - {wishlist.length}</div>
            <div title={summaCart.toFixed(2)}>Cart - {cart.length}</div>
            </div>
        </header>
    )
}

