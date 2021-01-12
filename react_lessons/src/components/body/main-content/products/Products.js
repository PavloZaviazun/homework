import {Exclusive} from "./exclusive";
import ProductService from "../../../../services/ProductService";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useCallback} from "react";
import {setCart, setProducts, setWishlist} from "../../../../redux/action-creators";
import {Demand} from "./demand";

export const Products = () => {

    const {product:{product}} = useSelector(state => state);
    const dispatch = useDispatch();

    let productService = new ProductService();

    useEffect(() =>{
        fetchData();
    }, [])

    const fetchData =  useCallback(async () => {
            const fullItems = await productService.getProducts();
            dispatch(setProducts(fullItems));
    }, [])

    function toggleWishlist(product) {
        dispatch(setWishlist(product));
    }

    function toggleCart(product) {
        dispatch(setCart(product));
    }

    return (
        <div className={"products"}>
            <Exclusive toggleWishlist={toggleWishlist} toggleCart={toggleCart}/>
            <Demand toggleWishlist={toggleWishlist} toggleCart={toggleCart}/>
        </div>
    )
}
