

// const PUPLIC_KEY ="pk_test_51P8Oa1Cb8r6GOKEjgGEU9leGsSwSB5OEqZzKouvHUvBWCbfjlaRJLifgVVGcdruJ1VU5lmXc6GvhJqBmP3xHla9t00lNy38opN";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import React from "react"
import PaymentForm from "../Cart/PaymentForm"
const PUBLIC_KEY ="pk_test_51P8Oa1Cb8r6GOKEjgGEU9leGsSwSB5OEqZzKouvHUvBWCbfjlaRJLifgVVGcdruJ1VU5lmXc6GvhJqBmP3xHla9t00lNy38opN";


const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = ({ amount }) => {

	return (
		<Elements stripe={stripeTestPromise}>
	           <PaymentForm amount={amount} />

		</Elements>
	)
}
export default StripeContainer;