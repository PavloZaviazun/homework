import React from 'react';

export const Product = ({isAddedtoWishList, product, toggleWishList, product: {id, title, price, description}}) => {
    // console.log(toggleWishList)
    // console.log(product.id)
    console.log(isAddedtoWishList)
    return(
        <div>
            <div>{title}</div>
            <div>{price}</div>
            <button>add to cart</button>
            <button onClick={() => toggleWishList(product)}>{isAddedtoWishList ?"delete from wishlist" : "add to wishlist"}</button>
            <hr/>
        </div>
    )
}

