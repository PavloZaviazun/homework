import cartGrey from "../../../../images/cart_icon.png";
import wishlistGrey from "../../../../images/wishlist_icon.png";
import libraGrey from "../../../../images/libra_icon.png";
import "../../Header.css";

export const CustomerArea = () => {

    return (
        <div className={"customer-area"}>
            <div className={"premium-wrap"}>
                <div className={"premium"}>
                    <div className={"premium-first"}>Попробуйте</div>
                    <div className={"premium-second"}>PREMIUM</div>
                    <div className={"popup"}>Premium</div>
                </div>
            </div>
            <div className={"icons"}>
                <div>
                    <img src={libraGrey} />
                </div>
            </div>
            <div className={"icons"}>
                <div>
                    <img src={wishlistGrey} />
                    <div className={"popup"}>wishlist</div>
                </div>
            </div>
            <div className={"icons"}>
                <div>
                    <img src={cartGrey}/>
                    <div className={"popup"}>cart</div>
                </div>
            </div>
        </div>
    )
}


