// CartPage.js
import { useCart } from '../Cart/CartContext'; // Adjust the import path as necessary
import '/Users/shafiqaabdat/Downloads/client-main/src/Cart/Cart.css';
import Top from '../PAGES/Top';
import Top1 from './Top1';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useLocation } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';
import Footer from '../footer/Footer';
import React, { useState,useEffect } from 'react';
import ShoppingAssistance from './ShoppingAssistance';
import visaImage from '../Cart/webimage-ED81074F-347A-430E-AC7CC0A3429D9570.jpg';
import StripeContainer from './StripeContainer';
import cashImage from '/Users/shafiqaabdat/Downloads/client-main/src/images/cash_.webp';
import { useUser } from '../signup/UserContext';
import Test from '../decore/Test';
import bed2 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/Screenshot 2024-02-28 at 22.05.01.png';
import axios from 'axios';
const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleQuantityChange = (itemId, quantity) => {
    updateQuantity(itemId, quantity);
  };
  
  const handleRemoveClick = (itemId) => {
    setSelectedItemId(itemId);
    setModalOpen(true);
};


  const handleRemoveConfirm = () => {
    removeItem(selectedItemId);
    setModalOpen(false);
  };

  const handleRemoveCancel = () => {
    setModalOpen(false);
  };
  const navigate = useNavigate(); 

  const onVisaClick = () => {
    setShowItem(true);  

  };
  const location = useLocation();
    const { userId, email, name, password, phone, address, location: userLocation } = location.state || {};
    const [userInfo, setUserInfo] = useState({ email, name, password, phone, address, location: userLocation });
    const handleChange = (e) => {
      setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //ارجعييييييلها
  const itemTotals = cartItems.map(item => item.price * item.quantity);

  const cartTotal = itemTotals.reduce((acc, curr) => acc + curr, 0);
  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const paymentMethodsSection = (
    <div className="payment-methods">
      <h3>Payment Methods</h3>
      <img src={visaImage} alt="Visa" style={{width:'70px',height:'50px',marginLeft:'10px'}} onClick={onVisaClick} />
    </div>
  );
      const [showItem, setShowItem] = useState(false);
    // const amount = 100000;
    const amount = itemTotals+"00";
    const { userData } = useUser();


    const [cart, setCart] = useState(null);

    const ipdevice='192.168.88.5';



    const saveItemToDatabase = async (item) => {
      if (!userData || !userData.userId) {
        alert('Please log in to save items.');
        return; // Stop execution if userData is null or userId is undefined
      }
    
      const apiUrl = 'http://192.168.88.5:9000/addToCart';
      const cartData = {
        userId: userData.userId, // Safe to access userId now
        items: [{
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
          name:item.name
        }],
        totalCost: item.price * item.quantity
      };
    
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cartData)
        });
      
        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(errorBody.message || 'Failed to save the item.');
        }
      
        const result = await response.json();
        alert('Item saved successfully!');
      } catch (error) {
        console.error('Error saving item:', error);
        alert('Error: ' + (error.message || 'Please try again.'));
      }
    };      
    const [product1,setProduct1]= useState([]);

    useEffect(() => {
      fetchProductData();
    }, []);
    
    // const fetchProductData = () => {

    //   const url = `http://${ipdevice}:9000/viewCart/1ssssswhi`;
    //   axios.get(url)
    //   .then(response => {
    //     if (response.data && response.data.cart) {
    //       setProduct1(response.data.cart);
    //       alert(response.data.cart.totalCost)
    //       console.log("Cart fetched successfully:", response.data.cart);
    //     } else {
    //       console.log("Failed to fetch cart:", response.data);
    //     }
    //   })
    //     .catch(e => console.log("Fetching error:", e));
        
    // };
    const [totalCost, setTotalCost] = useState(0);

    const fetchProductData = () => {
      const url = `http://${ipdevice}:9000/viewCart/663bd7fe3b2eb3ab18c13e5a`;
      axios.get(url)
      .then(response => {
        if (response.data && response.data.cart && response.data.cart.items) {
          setProduct1(response.data.cart.items  );  // Set to the items array directly
          setTotalCost(response.data.cart.totalCost); // Set the total cost here

          // alert(response.data.cart.totalCost)
          // alert(response.data.cart.userId)
          // alert(response.data.cart._id)

          console.log("Cart fetched successfully:", response.data.cart);
        } else {
          console.log("Failed to fetch cart:", response.data);
          setProduct1([]);  // Ensure product1 is always an array
          setTotalCost(0); // Reset total cost on failure to fetch data
        }
      })
      .catch(e => {
          console.error("Fetching error:", e);
          setProduct1([]);  // Ensure product1 is always an array on error
      });
  };
  
    

  return (
    <div>
      <Top />
      
      <ShoppingAssistance />
  



      <div className="cart-header">
        <Top1 itemCount={totalItemCount} />
        <h1 style={{marginTop:'100px',marginRight:'20px'}}>Your Cart</h1>





        {/* <div className="ProductList"> */}


{ product1.map((cart) => (
  <div  className="cart-item" key='663bd7fe3b2eb3ab18c13e5a' style={{width:'800px',marginLeft:'300px'}}>
  <img className='photo' src={cart.image} alt={cart.name} />

  <div className="item-details">
  <h3> <p style={{fontSize:'23px',color:'black'}}> Product Name: {cart.name} </p></h3>

    <p>Price: {cart.price}₪</p>
    <p>Quantity: {cart.quantity}</p>
    <p>Total:  {totalCost.toFixed(2)} ₪</p>
   

    {/* <p>Total Cart Cost: {cart.totalCost}₪</p>  */}
    <button className="button-remove" onClick={() => handleRemoveClick(cart._id)}>
  Remove
</button>
<button  onClick={() => saveItemToDatabase(cart)} className="save-cart-btn  " style={{width:'90px',height:'26px',fontSize:'15px',marginLeft:'20px',backgroundColor:'black',color:'white'}}>
  Save Item
</button>
  </div>
  </div>
))}





        {cartItems.map((item, index) => (
  <div key={item._id} className="cart-item" style={{width:'800px',marginLeft:'300px'}}>
    <img className='photo' src={item.image} alt={item.name} />
    <div className="item-details">
      <h3> <p style={{fontSize:'23px',color:'black'}}> Product Name: {item.name} {item.details ? `(Detailed)` : ''} </p></h3>
      <p>Price: {item.price} ₪</p>
      {/* Display other item details */}
      <p>
        Quantity: 
        <input
    type="number"
    value={item.quantity}
    onChange={(e) => handleQuantityChange(item.ـid, parseInt(e.target.value))}
    min="1"
    max='100'

/>

      </p>
      <p>Total: {itemTotals[index].toFixed(2)} ₪</p>
      <button className="button-remove" onClick={() => handleRemoveClick(item._id)}>
        Remove
      </button>
      <button  onClick={() => saveItemToDatabase(item)} className="save-cart-btn  " style={{width:'90px',height:'26px',fontSize:'15px',marginLeft:'20px',backgroundColor:'black',color:'white'}}>
        Save Item
      </button>
    </div>
  </div>
))}







            <div className="cart-total">Total Cart Value: {cartTotal.toFixed(2)} ₪</div>
        
      </div>
      {paymentMethodsSection}
      <ConfirmModal 
        isOpen={isModalOpen} 
        onCancel={handleRemoveCancel} 
        onConfirm={handleRemoveConfirm}
      >
        Are you sure you want to remove this item from the cart?
      </ConfirmModal>
      <br/>
      {showItem ? (
                <StripeContainer amount={amount} />
            ) : (
                <>
                    {/* <h3>{amount}</h3> */}
                    {/* <img src={spatula} alt='Spatula' /> */}
                    <br/>
                    {/* <button onClick={() => setShowItem(true)}>Purchase Spatula</button> */}
                </>
            )}
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <Footer />
    </div>
  );
};

export default Cart;
