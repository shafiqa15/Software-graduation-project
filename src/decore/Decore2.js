import React, { useState } from 'react';

function Decore2() {
    // const product = products.find(product => product.id.toString() === id);
    // const [mainImageUrl, setMainImageUrl] = useState(product?.imageUrl || product?.img1);
    // const [mainImageUrl2, setMainImageUrl2] = useState(product?.upadte1 || product?.img1);
    // const [mainImageUrlkhzana, setMainImageUrlkhzana] = useState(product?.khzana);
    // const [mainImageUrlkfloow, setMainImageUrlkfolow] = useState(product?.follow2);
    // const [mainImageUrlcomedena, setMainImageUrlcomedena] = useState(product?.comedena1);
    // const [mainImageUrlmirror, setMainImageUrlmirror] = useState(product?.mirror);
  // Dummy data for products
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'path/to/image1.png',
      price: 100,
      dimensions: { width: 50, height: 20, depth: 10 }
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'path/to/image2.png',
      price: 150,
      dimensions: { width: 60, height: 30, depth: 20 }
    }
    // Add more products as needed
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
    
      <h1>Products</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {products.map(product => (
          <div key={product.id} onClick={() => handleProductClick(product)} style={{ cursor: 'pointer' }}>
            <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div>
          <h2>{selectedProduct.name}</h2>
          <img src={selectedProduct.image} alt={selectedProduct.name} />
          <p>Price: ${selectedProduct.price}</p>
          <p>Dimensions (W x H x D): {selectedProduct.dimensions.width} x {selectedProduct.dimensions.height} x {selectedProduct.dimensions.depth}</p>
          <input type="number" value={selectedProduct.dimensions.width} onChange={(e) => setSelectedProduct({ ...selectedProduct, dimensions: { ...selectedProduct.dimensions, width: e.target.value }})} />
          <input type="number" value={selectedProduct.dimensions.height} onChange={(e) => setSelectedProduct({ ...selectedProduct, dimensions: { ...selectedProduct.dimensions, height: e.target.value }})} />
          <input type="number" value={selectedProduct.dimensions.depth} onChange={(e) => setSelectedProduct({ ...selectedProduct, dimensions: { ...selectedProduct.dimensions, depth: e.target.value }})} />
        </div>
      )}
    </div>
  );
}

export default Decore2;
