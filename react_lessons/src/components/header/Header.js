import "./Header.css";
import topBanner from  "../../images/top-banner.jpg";


export const Header = () => {

    return(
        <header>
            <div className={"top-banner"}>
                <img src={topBanner} alt={"Everything for cozy holidays"}/>
            </div>
        <div className={"header-body"}>
            Header
        </div>
        </header>
    )
}


