




import {withRouter} from 'react-router-dom';
// import  {CardElement} from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
const Card = ()=> {

return (
  <>
    <h1>Card</h1>
    <form id="payment-form">
    <label htmlFor='card-element' >
    Card
    <CardElement></CardElement>
  </label>
    <button>
      pay
    </button>

    </form>
  </>
)




}
export default Card;