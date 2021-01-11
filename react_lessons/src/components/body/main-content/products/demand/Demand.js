import {Product} from "../product";
import {useSelector} from "react-redux";
import chat from "../../../../../images/chat.png"

export const Demand = () => {

    const {product:{product}} = useSelector(state => state);

    const clothesProducts = product.filter(value => value.category === "women clothing");

    return (
        <div className={"exclusive"}>
            <div className={"product-title"}>
                <div className={"position-title"}><div><img src={chat} className={"icon-title"} alt={"title-icon"}/></div></div>
                <div className={"position-title"}><div><h2>Сейчас пользуется спросом в категории Женская одежда</h2></div></div>
            </div>
            {clothesProducts.map(item => {
                return <Product
                    key={item.id}
                    product={item}
                />
            })}
        </div>
    )
}
