import React, { useState } from 'react';
// import './App.css';
// import spatula from '/Users/shafiqaabdat/Downloads/client-main/src/images/decore/3d413bcd-c785-4023-b151-345449ab9f16.webp';
import StripeContainer from '../Cart/StripeContainer';
import '/Users/shafiqaabdat/Downloads/client-main/src/App.css';

function Visa() {
    const [showItem, setShowItem] = useState(false);
    const amount = 100000; // Amount in cents for Stripe (₪15.00)

    return (
        <div className='App'>
            <h1>The Spatula Store</h1>
            {showItem ? (
                <StripeContainer amount={amount} />
            ) : (
                <>
                    <h3>{amount}</h3>
                    {/* <img src={spatula} alt='Spatula' /> */}
                    <button onClick={() => setShowItem(true)}>Purchase Spatula</button>
                </>
            )}
        </div>
    );
}

export default Visa;
