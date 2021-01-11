import {Exclusive} from "./exclusive";
import ProductService from "../../../../services/ProductService";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useCallback} from "react";
import {setProducts} from "../../../../redux/action-creators";
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




    return (
        <div className={"products"}>
            <Exclusive/>
            <Demand/>
        </div>
    )
}
