import React from 'react';
import icon_cart from '/Users/shafiqaabdat/Downloads/client-main/src/Cart/basket-cart-icon-27.png';

const Top1 = ({ itemCount }) => {
    return (
        <div className="cart-icon" style={{
            marginTop: '180px',
            width: '70px',
            height: '70px', // Fixed typo here from '100x' to '100px'
            marginBottom: '-150px',
            position: 'relative', // Added for absolute positioning of item-count
            marginLeft:'800px'
        }}>
            <img src={icon_cart} alt="Cart" style={{ marginTop: '-100px' }}/>
            {itemCount > 0 && (
                <div className="item-count" style={{
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    position: 'absolute', // Position item-count absolute relative to cart-icon
                    top: '50%', // Position the top edge of item-count in the center
                    left: '50%', // Position the left edge of item-count in the center
                    transform: 'translate(-50%, -50%)', // Offset item-count by its own height and width to truly center
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                
                    color: 'white', // Adjust as needed
                    fontSize: '14px', // Adjust as needed
                }}>
                    {itemCount}
                </div>
            )}
        </div>
    );
};

export default Top1;
