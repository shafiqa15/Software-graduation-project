import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Top from '../PAGES/Top';
import { Link } from 'react-router-dom';
import '/Users/shafiqaabdat/Downloads/client-main/src/Fav/FavoritesPage.css';

const FavoritesPage = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  useEffect(() => {
    console.log("Favorites updated:", favoriteProducts);
  }, [favoriteProducts]); 
  
  useEffect(() => {
    fetchFavorites();
    
  }, []);  


  const ipdevice='192.168.88.6';
  const fetchFavorites = () => {
  

    axios.post(`http://${ipdevice}:9000/viewLike`)
    .then(response => {
      console.log(response.data); // The liked products
      setFavoriteProducts(response.data); // Assuming you have a state to hold these products
      // alert(response.data.name);
      // setProduct1(result.data.product);
      // alert(JSON.stringify(response.data));

    })
    .catch(error => {
      console.error('Error fetching liked products:', error);
    });
  
  }
  const removeFromFavorites = (productId) => {
    console.log("Attempting to remove product with ID:", productId); 
    axios.post(`http://${ipdevice}:9000/removeFromFavorites`, { id: productId })
        .then(response => {
            console.log("Product removed:", response.data);
            // Filter using the correct ID property
            const updatedFavorites = favoriteProducts.filter(product => product.id !== productId);
            setFavoriteProducts(updatedFavorites);
            alert("Product successfully removed from favorites!");
        })
        .catch(error => {
            console.error('Error removing product from favorites:', error);
            alert(`Error: ${error.message}`);
        });
}


  return (
    <div>


            <Top />
        <div className="favorites-container">
          <h1 style={{marginTop:'80px'}}>Favorites</h1>
          {favoriteProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Kind: {product.type} manufacturing</p>
              <p>Price: {product.price}₪</p>
              <p>♡</p>
              <Link to={`/BedPage/${product.id}`} className="view-product-button">
                View Product
              </Link>
          
            <button onClick={() => removeFromFavorites(product._id)} className="remove-favorite-button">
  Remove from Favorites
</button>


            </div>
          ))}
        </div>
        </div>
  );
};

export default FavoritesPage;
