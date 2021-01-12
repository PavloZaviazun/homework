import wish from "../../../../../images/wish.png";
import wishFull from "../../../../../images/wishFull.png";
import greenCart from "../../../../../images/cart_icon_green.png";
import greenCartFull from "../../../../../images/cart_icon_greenFull.png";

export const Product = (props) => {
    const {product: {image, title, price}, toggleWishlist, product, isToggledWishlist, toggleCart, isToggledCart} = props;
    let updatedTitle = "";
    if(title.length > 29) updatedTitle = title.substring(0, 29) + "...";
    else updatedTitle = title;

    return (
        <div className={"product-view"}>
                <div className={"div-product-image"}><div><img src={image} className={"product-image"} alt={title}/></div></div>
                <div className={"div-product-title"}>{updatedTitle}</div>
                <div className={"price"}>{Math.trunc(price*28.5)} <span>₴</span></div>
                <div className={"div-product-wish"}>
                    <div>
                        <img className={"product-icon"} onClick={() => toggleWishlist(product)}
                             src={isToggledWishlist ? wishFull : wish} alt={"wish"}/>
                    </div>
                </div>
                <div className={"div-product-cart"} onClick={() => toggleCart(product)}>
                    <div>
                        <img className={"product-icon"}
                             src={isToggledCart? greenCartFull : greenCart} alt={"cart"}/>
                    </div>
                </div>
        </div>
    )
}
