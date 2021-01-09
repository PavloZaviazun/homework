import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

export const HeaderMenu = () => {

    return(
        <Router>
        <div className={"header-menu"}>
            <div>
                <ul className={"top-menu"}>
                    <li className={"menu-bold"}>(044) 537-02-22</li>
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
                    <li>Здравствуйте, <span className={"menu-bold"}>войдите в личный кабинет</span></li>
                </ul>
            </div>
        </div>
        </Router>
    )
}

