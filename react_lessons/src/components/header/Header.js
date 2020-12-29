import React from 'react';
import {useSelector} from "react-redux";

export function Header() {
    const {cart:{cart}, wishlist:{wishlist}} = useSelector(state => state);
    return(
        <header>
            <h2>Welcome to our shop</h2>
            <div>
            <div>Wishlist - {wishlist.length}</div>
            <div>Cart - {cart.length}</div>
            </div>
        </header>
    )
}

