import './checkout.css'
import React from 'react'
import Subtotal from '../subtotal/Subtotal'
import { useStateValue } from '../../StateProvider';

function Checkout() {
    // const [{ basket } , dispatch] = useStateValue();
    
    return (
        <div id="checkout">
            <div id="checkout_left">
            <img id="checkout_ad"
            src = "https://t3.ftcdn.net/jpg/02/68/48/86/240_F_268488616_wcoB2JnGbOD2u3bpn2GPmu0KJQ4Ah66T.jpg" alt ="" />
            <div>
                <h2 id= "checkout_title">Your Shopping Basket</h2>
            </div>
            </div>
            <div id="checkout_right">
            <Subtotal/>
            <h2 >Your subtotal will be</h2>
            {/* <h2>{ basket }</h2> */}
          
            </div>
        </div>
    )
}

export default Checkout 