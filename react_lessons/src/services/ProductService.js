class ProductService {
    url = "https://fakestoreapi.com/products/";

    async getProducts() {
        return await fetch(this.url).then(value => value.json())
            .then(value => value);
    }
}

export default ProductService;
