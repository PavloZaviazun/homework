import React from 'react';

export const Product = ({isAddedtoWishList, isAddedtoCart, product, toggleWishList, toggleCart, product: {id, title, price, description}}) => {

    return(
        <div>
            <div>{title}</div>
            <div>{price}</div>
            <button onClick={() => toggleCart(product)}>{isAddedtoCart ? "delete from cart" : "add to cart"}</button>
            <button onClick={() => toggleWishList(product)}>{isAddedtoWishList ?"delete from wishlist" : "add to wishlist"}</button>
            <hr/>
        </div>
    )
}

