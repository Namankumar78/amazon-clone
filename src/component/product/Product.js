import React from "react";
import { useStateValue } from "../../StateProvider";
import "./product.css";


function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(' This is item is the basket ', basket);
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div id="product">
            <div id="product_info">
                <p>{title}</p>
                <p id="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div id="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
            </div>

            <img id="product_image" src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;