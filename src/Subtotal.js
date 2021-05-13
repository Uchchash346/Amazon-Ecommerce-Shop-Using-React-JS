import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';


function Subtotal() {
    const [{ basket }, dispatch] = useStateValue()

    return <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        {/* Part of the home work */}
                        Subtotal({basket.length} items):<strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} //part of the home work
            displayType={"text"}
            thousandsSeparator={true}
            prefix={"$"}
        />
        <button>Proceed to Checkout</button>
    </div>

}

export default Subtotal
