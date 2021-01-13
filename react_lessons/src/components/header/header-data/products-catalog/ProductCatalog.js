import imageCatalog from "../../../../images/product_catalog.png"
import {useDispatch} from "react-redux";
import {setFlag} from "../../../../redux/action-creators";

export const ProductCatalog = () => {

    const dispatch = useDispatch();

    return(
        <div className={"div-product-catalog"} onMouseLeave={() => {
            let variable = document.getElementsByClassName("menu")[0];
            variable.classList.remove("shade-class");
            dispatch(setFlag(false));
        }}>
            <div className={"product-catalog"} onClick={() => {
                dispatch(setFlag(true))
                let variable = document.getElementsByClassName("menu")[0];
                variable.classList.add("shade-class");
            }} >
                <div>
                    <img src={imageCatalog} alt={"imageCatalog"}/>
                </div>
                <div>
                    Каталог товаров
                </div>
            </div>
        </div>
    )
}
