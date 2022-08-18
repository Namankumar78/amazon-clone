import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    return (
        <div id="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p> 
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small id="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
    )
}

export default Subtotal