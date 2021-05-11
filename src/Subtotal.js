import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';


function Subtotal() {
    return <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        {/* Part of the home work */}
                        Subtotal(0 items):
                        <strong>0</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={0} //part of the home work
            displayType={"text"}
            thousandsSeparator={true}
            prefix={"£"}
        />
        <button>Proceed to Checkout</button>
    </div>

}

export default Subtotal
