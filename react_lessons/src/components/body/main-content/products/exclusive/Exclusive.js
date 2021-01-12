import star from "../../../../../images/star.png";
import {useSelector} from "react-redux";
import {Product} from "../product";

export const Exclusive = (props) => {
    const {product:{product}, wishlist:{wishlist}, cart: {cart}} = useSelector(state => state);
    const {toggleWishlist, toggleCart} = props;
    const jewelryProducts = product.filter(value => value.category === "jewelery");

    return (
        <div className={"exclusive"}>
            <div className={"product-title"}>
                <div className={"position-title"}><div><img src={star} className={"icon-title"} alt={"title-icon"}/></div></div>
                <div className={"position-title"}><div><h2>Только в Розетке</h2></div></div>
            </div>
            {jewelryProducts.map(item => {
                return <Product
                    key={item.id}
                    product={item}
                    toggleWishlist={toggleWishlist}
                    toggleCart={toggleCart}
                    isToggledWishlist={!!wishlist.find(el => el.id === item.id)}
                    isToggledCart={!!cart.find(el => el.id === item.id)}
                />
            })}
        </div>
    )
}
