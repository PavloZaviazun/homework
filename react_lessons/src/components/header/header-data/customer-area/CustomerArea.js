import cartGrey from "../../../../images/cart_icon.png";
import wishlistGrey from "../../../../images/wishlist_icon.png";
import libraGrey from "../../../../images/libra_icon.png";
import "../../Header.css";

export const CustomerArea = () => {

    return (
        <div className={"customer-area"}>
            <div className={"premium"}>
                <div className={"premium-first"}>Попробуйте</div>
                <div className={"premium-second"}>PREMIUM</div>
            </div>
            <div className={"icons"}><img src={libraGrey} onMouseOver={() => {console.log("her")}}/></div>
            <div className={"icons"}><img src={wishlistGrey} /></div>
            <div className={"icons"}><img src={cartGrey}/></div>
        </div>
    )
}
