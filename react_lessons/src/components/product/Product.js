import "./Product.css";
import cart from "./cartBlack.png";
import wish from "./wishBlack.png";

function cutTitle(title) {
    let updatedTitle = null;
    if(title.length > 30) return updatedTitle = title.substring(0, 26) + "...";
    return title;
}

function Product(props) {
    const {product: {title}, product: {description}, product:{image}, product:{price}} = props;

    return (
        <div className={"product"}>
            <div className={"titleStyle"}>{cutTitle(title)}</div>
            <div className={"imageBlock"}>
                <div>
                    <img src={image} className={"imageStyle"}/>
                </div>
            </div>
            <div>{price} $</div>
            <div className={"bottomProduct"}>
                <div><img className={"cart"} src={cart} title={"Add to cart"}/></div>
                <div><img className={"wish"} src={wish} title={"Add to wishlist"}/></div>
            </div>
        </div>
    )
}

export default Product;
