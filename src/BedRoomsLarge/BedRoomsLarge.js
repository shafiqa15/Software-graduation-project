

// export default BedRoomsLarge;
import React, { useState, useEffect } from 'react';
import '/Users/shafiqaabdat/Downloads/client-main/src/BedRoomsLarge/BedRoomsLarge.css';
import Top from '../PAGES/Top';
import bedFrameImage from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/firstbedimage.png';
import Footer from '../footer/Footer';
// Combined products array
const products = [
  { id: 1, name: 'Bed Frame', price: 100,imageUrl: bedFrameImage,kind:"Imported manufacturing" },
  { id: 2, name: 'Mattress', price: 200 ,imageUrl: bedFrameImage,kind:"Local manufacturing " },
  { id: 3, name: 'Duvet Cover', price: 50,imageUrl: bedFrameImage,kind:"Local manufacturing"  },
  { id: 4, name: 'Pillow', price: 235 ,imageUrl: bedFrameImage,kind:"Imported manufacturing" },
  { id: 5, name: 'Pillow', price: 25 ,imageUrl: bedFrameImage,kind:"Imported manufacturing" },
  { id: 6, name: 'Pillow', price: 25 ,imageUrl: bedFrameImage,kind:"Local manufacturing" },
  { id: 7, name: 'Pillow', price: 25,imageUrl: bedFrameImage ,kind:"Imported manufacturing" },
  { id: 8, name: 'Pillow', price: 25 ,imageUrl: bedFrameImage,kind:"Imported manufacturing" },
  { id: 9, name: 'Pillow', price: 25 ,imageUrl: bedFrameImage,kind:"Imported manufacturing" },
  { id: 10, name: 'Pillow', price: 25 ,imageUrl: bedFrameImage,kind:"Local manufacturing" },
  { id: 11, name: 'Pillow', price: 25 ,imageUrl: bedFrameImage,kind:"Imported manufacturing" },
  { id: 12, name: 'Pillow', price: 2445 ,imageUrl: bedFrameImage,kind:"Local manufacturing" },
];

const BedRoomsLarge = () => {
  const [cart, setCart] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('priceLowToHigh');
  const [sortedProducts, setSortedProducts] = useState(products);
  useEffect(() => {
    let sorted = [...sortedProducts];
    switch (sortCriteria) {
      case 'priceLowToHigh':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'Imported manufacturing':
        sorted.sort((a, b) => a.kind.localeCompare(b.kind) || a.name.localeCompare(b.name));
        break;
      case 'Local manufacturing':
        sorted.sort((a, b) => b.kind.localeCompare(a.kind) || a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    setSortedProducts(sorted);
  }, [sortCriteria]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Top />
      <div className="sora3">
        <div className="cont">
          <h1>Many categories of bedrooms!</h1>
          <span className='advanced-glow'>Trending product in {new Date().getFullYear()}</span>
        </div>
      </div>

      {/* <div className="Sidebar">
      <p> Sort by:</p>
        <button onClick={() => setSortCriteria('priceLowToHigh')}>Price Low to High</button>
        <button onClick={() => setSortCriteria('priceHighToLow')}>Price High to Low</button>

      </div> */}

<br></br>
      <div className="sorting-options">
        <select onChange={(e) => setSortCriteria(e.target.value)}>
        <option value="name">Sort by</option>
          <option value="priceLowToHigh">Price Low to High</option>
          <option value="priceHighToLow">Price High to Low</option>
          <option value="Imported manufacturing">Imported manufacturing</option>
          <option value="Local manufacturing">Local manufacturing"</option>
         
        </select>
      </div>

      <div className="ProductList">
        {sortedProducts.map((product) => (
          <div className="ProductCard" key={product.id}>
            <img className="ProductImage" src={product.imageUrl} alt={product.name} />
            <div className="ProductName">{product.name}</div>
            <div className="ProductPrice">{` ${product.price} ₪`}</div>
            <div className="kind">{` ${product.kind} `}</div>
            <button className="AddToCartButton" onClick={() => addToCart(product)}>Details</button>
          </div>
        ))}
      </div>
      <br/>    <br/>    <br/>    <br/>
      <Footer></Footer>
    </div>



  );
};

export default BedRoomsLarge;
