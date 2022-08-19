import React from 'react'
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, rating, price }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            
        })
    }

    return (
        <div id='checkoutProduct'>
            <img id='checkoutProduct_image' src={image} />
            <div id='checkoutProduct_info'>
                <p id='checkoutProduct_title'>{title}</p>
                <p id='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div id="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <p>🌟</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove the product</button>
            </div>
        </div>
    )
}

export default CheckoutProduct