import imageCatalog from "../../../../images/product_catalog.png"

export const ProductCatalog = () => {

    return(
        <div className={"product-catalog"}>
            <div>
                <img src={imageCatalog}/>
            </div>
            <div>
                Каталог товаров
            </div>
        </div>
    )
}
