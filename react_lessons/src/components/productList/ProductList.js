import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SET_PRODUCTS} from "../../redux/action-types";
import {setProducts} from "../../redux/action-creators";
import Product from "../product/Product";
import "./ProductList.css"


export function ProductList() {
    const dispatch = useDispatch();
    const {products: {products}} = useSelector(state => state);
    console.log(products);

    useEffect(async () => {
        const dataProducts = await fetchProducts();
        dispatch(setProducts(dataProducts));
    }, []);

    async function fetchProducts() {
        return await fetch("https://fakestoreapi.com/products").then(products => products.json());
    }

    return (
        <div className={"productList"}>
            <div className={"quantity"}>Product quantity - {products.length}</div>
            {products.map(product => {
                return <Product
                key={product.id}
                product={product}
                />
            })}
        </div>
    )
}


