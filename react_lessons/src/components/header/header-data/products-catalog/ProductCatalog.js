import imageCatalog from "../../../../images/product_catalog.png"
import {useDispatch} from "react-redux";
import {setFlag} from "../../../../redux/action-creators";

export const ProductCatalog = () => {

    const dispatch = useDispatch();

    return(
        <div className={"product-catalog"} onClick={() => dispatch(setFlag(true))}>
            <div>
                <img src={imageCatalog} alt={"imageCatalog"}/>
            </div>
            <div>
                Каталог товаров
            </div>
        </div>
    )
}
