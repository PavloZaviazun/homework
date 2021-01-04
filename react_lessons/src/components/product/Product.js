import "./Product.css";
import cartBlack from "./cartBlack.png";
import cartGreen from "./cartGreen.png"
import wishBlack from "./wishBlack.png";
import wishRed from "./wishRed.png"

function cutTitle(title) {
    if(title.length > 30) return title.substring(0, 26) + "...";
    return title;
}

function Product(props) {
    const {isAddedtoWishlist, isAddedtoCart, product, toggleCart, toggleWishlist,
        product: {title}, product:{image}, product:{price}} = props;
    return (
        <div className={"product"}>
            <div className={"titleStyle"}>{cutTitle(title)}</div>
            <div className={"imageBlock"}>
                <div>
                    <img alt={title} src={image} className={"imageStyle"}/>
                </div>
            </div>
            <div>{price} $</div>
            <div className={"bottomProduct"}>
                <div><img onClick={() => toggleCart(product)} className={"cart"}
                          src={isAddedtoCart ? cartGreen : cartBlack}
                          title={isAddedtoCart ? "Remove from cart" : "Add to cart"}
                          alt={"cart"}/></div>
                <div><img onClick={() => toggleWishlist(product)} className={"wish"}
                          src={isAddedtoWishlist ? wishRed : wishBlack}
                          title={isAddedtoWishlist ? "Remove from wishlist" : "Add to wishlist"}
                          alt={"wishlist"}/></div>
            </div>
        </div>
    )
}

export default Product;
