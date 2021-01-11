import {CustomerArea} from "./customer-area";
import {ProductCatalog} from "./products-catalog";
import {Search} from "./search";

export const HeaderData = () => {

    return(
        <div className={"header-data"}>
            <div className={"logo"}>
                <img src={"https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg"} alt={"logo"}/>
            </div>
            <ProductCatalog/>
            <Search/>
            <CustomerArea/>
        </div>
    )
}
