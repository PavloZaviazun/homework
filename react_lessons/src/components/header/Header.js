import "./Header.css";
import {useSelector} from "react-redux";

const Header = () => {

    const {cart:{cart}, wishlist:{wishlist}} = useSelector(state => state);
    let sumCart = cart.reduce((acc, value) => {return acc + value.price;}, 0);
    let sumWishlist = wishlist.reduce((acc, value) => {return acc + value.price;}, 0)
    return (
        <header className={"mainHeader"}>
            <div className={"shopName"}>Cookies</div>
            <div>
            <div title={sumCart.toFixed(2)} className={"cartHeader"}>Cart - {cart.length}</div>
            <div title={sumWishlist.toFixed(2)} className={"wishlistHeader"}>Wishlist - {wishlist.length}</div>
            </div>
        </header>
    )
}

export default Header;
