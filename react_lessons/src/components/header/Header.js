import "./Header.css";
import topBanner from  "../../images/top-banner.jpg";
import {HeaderMenu} from "./header-menu";
import {HeaderData} from "./header-data";


export const Header = () => {

    return(
        <header>
            <div className={"top-banner"}>
                <img src={topBanner} alt={"Everything for cozy holidays"}/>
            </div>
        <div className={"header-body"}>
            <HeaderMenu/>
            <HeaderData/>
        </div>
        </header>
    )
}


