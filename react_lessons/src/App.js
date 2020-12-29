import {Header} from "./components/header";
import {Product} from "./components/product";
import {ProductList} from "./components/productList";
import "./App.css"
import {useSelector} from "react-redux";

function App() {


return (

        <div>

            <Header/>
            <Product/>
            <ProductList/>
        </div>)

}

export default App

