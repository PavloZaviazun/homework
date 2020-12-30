import React from 'react';
import ProductService from "../../services/ProductService";
import {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {setProducts} from "../../redux";
import {useSelector} from "react-redux";
import {Product} from "../product";
import {setWishList, setCart} from "../../redux"

export function ProductList() {
    const {wishlist:{wishlist}, products:{products}, cart:{cart}} = useSelector(state => state);

    const dispatch = useDispatch();

    const fetchData = useCallback(async () => {
        const data = await ProductService.getProducts();
        dispatch(setProducts(data))
    }, [])

    useEffect(() => {
        fetchData();
    }, [])

    function toggleWishList(product) {
        dispatch(setWishList(product));
    }

    function toggleCart(product) {
        dispatch(setCart(product));
    }

    return (
        <div>
            {products.map(product => {
                return <Product
                isAddedtoCart = {!!cart.find(({id}) => id === product.id)}
                isAddedtoWishList = {!!wishlist.find(({id}) => id === product.id)}
                key={product.id}
                product={product}
                toggleWishList={toggleWishList}
                toggleCart={toggleCart}
                />
            })}
        </div>
    )
}
