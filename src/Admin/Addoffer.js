import React, { useState } from 'react';
import axios from 'axios';
import '/Users/shafiqaabdat/Downloads/client-main/src/Admin/Addoffer.css';
const AddOffer = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    numberOfPieces: '',
    endDate: '',
    images: [''],
    products: [''],
    descriptionn: [''],
    relatedImages: [['']],
    Colors: [''],
    productname: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleArrayChange = (e, index, arrayName) => {
    const { value } = e.target;
    const updatedArray = formData[arrayName].map((item, idx) => (idx === index ? value : item));
    setFormData({
      ...formData,
      [arrayName]: updatedArray,
    });
  };

  const handleNestedArrayChange = (e, outerIndex, innerIndex, arrayName) => {
    const { value } = e.target;
    const updatedArray = formData[arrayName].map((outerItem, idx) =>
      idx === outerIndex ? outerItem.map((innerItem, innerIdx) => (innerIdx === innerIndex ? value : innerItem)) : outerItem
    );
    setFormData({
      ...formData,
      [arrayName]: updatedArray,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting Form Data:', formData);
  
      const response = await axios.post('http://192.168.88.6:9000/addOffer', formData);
      console.log('Response:', response.data);
      alert('Offer added successfully');
      if (response.data.success) {
        alert('Offer added successfully');
      }
    } catch (error) {
      console.error('Error adding offer:', error);
      alert('Error adding offer');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <input type="number" name="numberOfPieces" value={formData.numberOfPieces} onChange={handleChange} placeholder="Number of Pieces" required />
      <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="End Date" required />
      
      {formData.images.map((img, index) => (
        <input key={index} type="text" value={img} onChange={(e) => handleArrayChange(e, index, 'images')} placeholder="Image URL" />
      ))}

      {formData.products.map((product, index) => (
        <input key={index} type="text" value={product} onChange={(e) => handleArrayChange(e, index, 'products')} placeholder="Product" />
      ))}

      {formData.descriptionn.map((desc, index) => (
        <input key={index} type="text" value={desc} onChange={(e) => handleArrayChange(e, index, 'descriptionn')} placeholder="Description" />
      ))}

      {formData.relatedImages.map((outerArray, outerIndex) => (
        <div key={outerIndex}>
          {outerArray.map((innerValue, innerIndex) => (
            <input key={innerIndex} type="text" value={innerValue} onChange={(e) => handleNestedArrayChange(e, outerIndex, innerIndex, 'relatedImages')} placeholder="Related Image URL" />
          ))}
        </div>
      ))}

      {formData.Colors.map((color, index) => (
        <input key={index} type="text" value={color} onChange={(e) => handleArrayChange(e, index, 'Colors')} placeholder="Color" />
      ))}

      <input type="text" name="productname" value={formData.productname} onChange={handleChange} placeholder="Product Name" />

      <button type="submit">Add Offer</button>
    </form>
  );
};

export default AddOffer;
