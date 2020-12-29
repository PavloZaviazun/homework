import React from 'react';
import ProductService from "../../services/ProductService";
import {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {setProducts} from "../../redux";
import {useSelector} from "react-redux";
import {Product} from "../product";
import {setWishList} from "../../redux"

export function ProductList() {
    const {wishlist:{wishlist}, products:{products}} = useSelector(state => state);
    console.log(wishlist)
    // const {productService} = ProductService.getProducts();
    // console.log(ProductService)

    const dispatch = useDispatch();

    const fetchData = useCallback(async () => {
        const data = await ProductService.getProducts();
        dispatch(setProducts(data))
        // console.log(data)
    }, [])

    useEffect(() => {
        fetchData();
    }, [])

    function toggleWishList(product) {
        dispatch(setWishList(product));
    }

    return (
        <div>
            {products.map(product => {
                return <Product
                isAddedtoWishList = {!!wishlist.find(({id}) => id === product.id)}
                key={product.id}
                product={product}
                toggleWishList={toggleWishList}
                />
            })}
        </div>
    )
}
