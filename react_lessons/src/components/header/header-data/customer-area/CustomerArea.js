import cartGrey from "../../../../images/cart_icon.png";
import cartWhite from "../../../../images/cart_icon_chosen.png";
import cartGreen from "../../../../images/cart_icon_green.png"
import wishlistGrey from "../../../../images/wishlist_icon.png";
import wishlistWhite from "../../../../images/wishlist_icon_chosen.png";
import wish from "../../../../images/wish.png";
import libraGrey from "../../../../images/libra_icon.png";
import "../../Header.css";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';

export const CustomerArea = () => {

    const {wishlist: {wishlist}, cart: {cart}} = useSelector(value => value);
    let okonchanie = "";
    if(cart.length === 1) okonchanie = "";
    else if(cart.length > 1 && cart.length < 5) okonchanie = "a";
    else okonchanie = "ов";
    const summa = cart.reduce((acc, value) => {
            return Math.trunc(acc + value.price*28.5);
        }, 0)


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
                    <img src={libraGrey} alt={"libra"}/>
                </div>
            </div>
            <div className={"icons"}>
                <div>
                    <img src={wishlist.length ? wishlistWhite : wishlistGrey} alt={"wishlist"}/>
                    {wishlist.length ?
                        <div className={"number-area"}><div>{wishlist.length}</div></div> :
                        <div className={"empty-number-area"}></div>}
                    {wishlist.length ? <div></div> :
                        <div className={"popup"}>
                            <div className={"wish"}>
                                <div><img className={"icon"} src={wish} alt={"wish-icon"}/></div>
                                <div className={"div-text"}>
                                    <div className={"titleName"}>Список желаний пуст</div>
                                    <div>Добавляйте товары в список желаний, делитесь списками с друзьями и обсуждайте товары вместе. </div>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
            <div className={"icons"}>
                <div>
                    <img src={cart.length ? cartWhite : cartGrey} alt={"cart"}/>
                    {cart.length ?
                        <div className={"number-area"}><div>{cart.length}</div></div> :
                        <div className={"empty-number-area"}></div>}
                    {cart.length ?
                        <div className={"popup popup-300"}>
                            <div className={"cart-information"}>В корзине {cart.length} товар{okonchanie} <br/>
                                На сумму {summa} грн</div>
                            <div><button className={"order"}>Оформить заказ</button></div>
                            <div className={"cart-link"}><Link to={""}>Перейти в корзину</Link></div>
                        </div>                        :
                        <div className={"popup"}>
                            <div className={"wish"}>
                                <div><img className={"icon"} src={cartGreen} alt={"cart-icon"}/></div>
                                <div className={"div-text"}>
                                    <div className={"titleName"}>Ваша корзина пуста</div>
                                    <div>Добавляйте понравившиеся товары в корзину</div>
                                </div>
                            </div>
                        </div>
                        }
                </div>
            </div>
        </div>
    )
}


