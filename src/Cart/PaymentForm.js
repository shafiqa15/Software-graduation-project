import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import celebrationAnimation from '/Users/shafiqaabdat/Downloads/client-main/src/Cart/Animation - 1714596651280.json'; 
import { useLocation } from "react-router-dom";
const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
};

export default function PaymentForm({ amount }) {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();



    const location = useLocation();
    const { userId, email, name, password, phone, address, location: userLocation } = location.state || {};
    const [userInfo, setUserInfo] = useState({ email, name, password, phone, address, location: userLocation });
    const handleChange = (e) => {
      setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });

        if (!error) {
            try {
                const {id} = paymentMethod;
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: amount,  // Using the passed amount
                    id
                });

                if (response.data.success) {
                    console.log("Successful payment");
                    setSuccess(true);
                }
            } catch (error) {
                console.log("Error", error);
            }
        } else {
            console.log(error.message);
        }
    };

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: celebrationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (  

        <>
            {!success ? 
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS}/>
                        </div>
                    </fieldset>
                    <br/>
                    <button className="ppay" style={{width:'200px',marginLeft:'600px',backgroundColor:'#464a5d' }}>Pay</button>
                </form>
            :
                <div>
                    <h2 style={{fontSize:'22px'}}>Thanks for choosing us {name}
 ! Your cart just has been bought,check the messages from admin of arrival day + check ur profile to know the date! Have a nice day. </h2>

                    <Lottie options={defaultOptions} height={200} width={200}/>
                    <h2 style={{marginLeft:'210px'}}> Here you can keep checking the date of your order arriving   </h2>
                    <button  style={{width:'200px',marginLeft:'600px',backgroundColor:'#464a5d',color:'white' }}> Go</button>
<p>
INVOICE HISTORY:
</p>
                </div> 
            }
        </>
    );
}
