import  phone from "../../../images/phone.png";
import user from "../../../images/user.png";
import arrow from "../../../images/arrow.png";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

export const HeaderMenu = () => {

    return(
        <div className={"header-menu"}>
            <div>
                <ul className={"top-menu"}>
                    <li className={"menu-bold"}>
                        <button type="button" className={"popup-button"} data-toggle="modal" data-target="#exampleModalCentered" >
                            <div>
                                <img src={phone} className={"phone-icon"}/> (044) 537-02-22<img src={arrow} className={"arrow-icon"}/>
                            </div>
                        </button>
                        </li>
                    <li><Link to={"/contacts"}>Контакты</Link></li>
                    <li><Link to={"/help"}>Помощь</Link></li>
                    <li><Link to={"COVID19"}>Наш ответ COVID-19</Link></li>
                </ul>
            </div>
            <div className={"empty-div"}></div>
            <div>
                <ul className={"top-menu"}>
                    <li><span className={"not-active"}>RU |</span> <Link to={""}>UA</Link></li>
                    <li>Город <Link to={""}>Киев</Link></li>
                    <li>Здравствуйте, <span className={"menu-bold"}><img src={user}
                    className={"user-icon"}/> войдите в личный кабинет</span></li>
                </ul>
            </div>
        </div>
    )
}

