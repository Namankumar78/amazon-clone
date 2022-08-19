import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import './payment.css'

function Payment() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div id='payment'>
            <div id='payment_container'>
            <h1>
                Checkout (<Link to='/checkout'>{basket.length} items</Link>)
            </h1>
                <div id='payment_section'>
                    <div id='payment_title'>
                        <h3>Deliver Address</h3>
                    </div>
                    <div id='payment_address'>
                        <p>test@gmil.com</p>
                        <p>s 10 </p>
                        <p>Police Line Aligarh</p>
                    </div>
                </div>
                <div id='payment_section'>
                    <div id='payment_title'>
                        <h3>Review Items and Delivery</h3>

                    </div>
                    <div id='payment_item'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />))}</div>
                </div>
                <div id='payment_section'>
                <div id="payment_title">
                    <h3>Paymen Method</h3>
                </div>
                <div id = 'payment_details'>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Payment