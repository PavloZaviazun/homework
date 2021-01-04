import {useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCart, setProducts, setWishlist} from "../../redux/action-creators";
import Product from "../product/Product";
import "./ProductList.css"


export function ProductList() {
    const dispatch = useDispatch();
    const {products: {products}, cart:{cart}, wishlist:{wishlist}} = useSelector(state => state);

    useEffect(() => {
        fetchProducts();
    });

    const fetchProducts = useCallback(async () => {
        const dataProducts = await fetch("https://fakestoreapi.com/products").then(products => products.json());
        dispatch(setProducts(dataProducts));
    }, [dispatch])

    function toggleCart(product) {
        dispatch(setCart(product))
    }

    function toggleWishlist(product) {
        dispatch(setWishlist(product))
    }

    return (
        <div className={"productList"}>
            {products.map(product => {
                return <Product
                key={product.id}
                product={product}
                toggleCart={toggleCart}
                toggleWishlist={toggleWishlist}
                isAddedtoCart={!!cart.find(({id}) => id === product.id)}
                isAddedtoWishlist={!!wishlist.find(({id}) => id === product.id)}
                />
            })}
        </div>
    )
}


