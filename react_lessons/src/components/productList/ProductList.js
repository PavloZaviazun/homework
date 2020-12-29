import React from 'react';
import ProductService from "../../services/ProductService";
import {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";

export function ProductList() {
    // const {productService} = ProductService.getProducts();
    // console.log(ProductService)

    const dispatch = useDispatch();

    const fetchData = useCallback(async () => {
        const data = await ProductService.getProducts();
        console.log(data)
    }, [])

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>aaaa</div>
    )
}
