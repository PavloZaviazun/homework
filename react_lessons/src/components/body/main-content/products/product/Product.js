import wish from "../../../../../images/wish.png"

export const Product = (product) => {

    const {product: {image, title, price}} = product;
    let updatedTitle = "";
    if(title.length > 39) updatedTitle = title.substring(0, 39) + "...";
    else updatedTitle = title;

    return (
        <div className={"product-view"}>
                <div className={"div-product-image"}><div><img src={image} className={"product-image"} alt={title}/></div></div>
                <div className={"div-product-title"}>{updatedTitle}</div>
                <div className={"price"}>{Math.trunc(price*28.5)} <span>₴</span></div>
                <div><img className={"product-wish"} src={wish} alt={"wish"}/></div>
        </div>
    )
}
