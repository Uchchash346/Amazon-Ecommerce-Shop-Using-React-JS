import { CardElement } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import axios from 'axios';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate that special secret which allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();

    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret);

    const handleSubmit = async (event) => {
        // do all fancy stripe stuff 
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //payment intent = payment confirmation 
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            useHistory.push('/orders');
        })
    }

    const handleChange = event => {
        // Listen for changes in the card elements
        // and display any errors as the customers types their card details 
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                {/* Payment section - delivery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123, React Lane</p>
                        <p>Los Angles, CA</p>
                    </div>
                </div>
                {/* Payment section - delivery Items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                            // console.log(item)
                        ))}
                    </div>
                </div>
                {/* Payment section - delivery method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* Stripe Magic will go */}
                        <form onClick={handleSubmit}>
                            <CardElement onCHange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} //part of the homework
                                    displayType={"text"}
                                    thousandsSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
// import React from 'react'
// import { Link } from 'react-router-dom';
// import CheckoutProduct from './CheckoutProduct';
// import './Payment.css'
// import { useStateValue } from './StateProvider';
// function Payment() {
//     const [{ basket, user }, dispatch] = useStateValue();
//     return (
//         <div className="payment">
//             <div className="payment_container">
//                 <h1>Checkout (
//                     <Link to="/checkout">{basket?.length} items</Link>
//                     )
//                 </h1>
//                 {/* Payment section - delivery address */}
//                 <div className="payment_section">
//                     <div className="payment_title">
//                         <h3>Delivery Address</h3>
//                     </div>
//                     <div className="payment_address">
//                         <p>{user?.email}</p>
//                         <p>123, React Lane</p>
//                         <p>Los Angles, CA</p>
//                     </div>
//                 </div>
//                 {/* Payment section - delivery Items */}
//                 <div className="payment_section">
//                     <div className="payment_title">
//                         <h3>Review Items and Delivery</h3>
//                     </div>
//                     <div className="payment_items">
//                         {basket.map(item => (
//                             <CheckoutProduct
//                                 id={item.id}
//                                 title={item.title}
//                                 image={item.image}
//                                 price={item.price}
//                                 rating={item.rating}
//                             />
//                             // console.log(item)
//                         ))}
//                     </div>
//                 </div>
//                 {/* Payment section - delivery method */}
//                 <div className="payment_section">
//                     <div className="payment_title">
//                         <h3>Payment Method</h3>
//                     </div>
//                     <div className="payment_details">
//                         {/* Stripe Magic will go */}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Payment
