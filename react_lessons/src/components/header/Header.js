import "./Header.css";
import {useSelector} from "react-redux";

export function Header() {

    const {cart:{cart}, wishlist:{wishlist}} = useSelector(state => state);
    return (
        <header className={"mainHeader"}>
            <div className={"shopName"}>Cookies</div>
            <div>
            <div title={cart.reduce((acc, value) => {
                return acc + value.price;
            }, 0)} className={"cartHeader"}>Cart - {cart.length}</div>
            <div title={wishlist.reduce((acc, value) => {
                return acc + value.price;
            }, 0)} className={"wishlistHeader"}>Wishlist - {wishlist.length}</div>
            </div>
        </header>
    )
}
