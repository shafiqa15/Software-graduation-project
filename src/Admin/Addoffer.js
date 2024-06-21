import React, { useState } from 'react';
import axios from 'axios';
import './Addoffer.css';

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

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
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
      let imageUrl = '';
      if (imageFile) {
        const imageData = new FormData();
        imageData.append('file', imageFile);
        imageData.append('upload_preset', 'your_upload_preset'); // Replace with your upload preset
        const imageResponse = await axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', imageData); // Replace with your Cloudinary URL
        imageUrl = imageResponse.data.secure_url;
      }

      const finalFormData = {
        ...formData,
        image: imageUrl,
      };

      console.log('Submitting Form Data:', finalFormData);
  
      const response = await axios.post('http://192.168.88.6:9000/addOffer', finalFormData);
      console.log('Response:', response.data);
      if (response.data.success) {
        alert('Offer added successfully');
      } else {
        alert('Error adding offer');
      }
    } catch (error) {
      console.error('Error adding offer:', error);
      alert('Error adding offer');
    }
  };
  
  return (
    
    <form onSubmit={handleSubmit} style={{width:'600px',height:'100px'}}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input type="file" name="image" onChange={handleFileChange} required />
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <input type="number" name="numberOfPieces" value={formData.numberOfPieces} onChange={handleChange} placeholder="Number of Pieces" required />
      <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="End Date" required />
      
      {formData.images.map((img, index) => (
        <input type="file" name="Image URL" onChange={handleFileChange} required />

      ))}

      {formData.products.map((product, index) => (
        <input key={index} type="text" value={product} onChange={(e) => handleArrayChange(e, index, 'products')} placeholder="Product" />
      ))}

      {formData.descriptionn.map((desc, index) => (
        <input key={index} type="text" value={desc} onChange={(e) => handleArrayChange(e, index, 'descriptionn')} placeholder="Description" />
      ))}

      {formData.relatedImages.map((outerArray, outerIndex) => (
        <div key={outerIndex}> Related image 
        
            <input type="file" name="relatedImages" onChange={handleFileChange} required />

        
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
