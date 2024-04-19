import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/shafiqaabdat/Downloads/client-main/src/Fav/FavoritesPage.css';
import Top from '../PAGES/Top';
import Footer from '../footer/Footer';

const FavoritesPage = ({ products }) => {
    const favoriteProductIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteProducts = products.filter(product => favoriteProductIds.includes(product.id));

    const removeFromFavorites = (productId) => {
        if (window.confirm("Are you sure you want to remove this product from favorites?")) {
            const newFavorites = favoriteProductIds.filter(id => id !== productId);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            window.location.reload(); // Refresh the page to update the UI
        }
    };

    return (
      <div>
        <Top />
        <div className="favorites-container">
          <h1 style={{marginTop:'80px'}}>Favorites</h1>
          {favoriteProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Kind: {product.kindd}</p>
              <p>Price: {product.price}₪</p>
              <p>♡</p>
              <Link to={`/BedPage/${product.id}`} className="view-product-button">
                View Product
              </Link>
              <button onClick={() => removeFromFavorites(product.id)} className="remove-favorite-button">
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
        <br/>
        <br/>    
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
  

        <Footer></Footer>


      </div>
      
    );
};

export default FavoritesPage;
