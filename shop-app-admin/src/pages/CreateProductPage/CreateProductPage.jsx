import React, { useState } from 'react';

// Import service
import service from '../../redux/service/service';

// Import styles
import './CreateProductPage.css'

// Import toast
import { toast } from 'react-toastify';

const CreateProductPage = () => {
  // Set states
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);

  // Handle Input change
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // Handle product category change
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newProduct = { ...inputs, categories: cat };
      service.createProduct(newProduct);
      toast.success('Product has been created!');
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          {/* PRODUCT TITLE */}
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Insert product title..."
            onChange={handleChange}
          />
        </div>
        {/* PRODUCT DESCRIPTION */}
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="description"
            type="text"
            placeholder="Insert product description..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="jeans,skirts" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Image</label>
          <input
            name="img"
            type="text"
            placeholder="Insert image URL..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleSubmit} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateProductPage