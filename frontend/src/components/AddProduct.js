import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const addProduct = ()=>{
    console.log(name,price,company,category);
  }
  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        className="inputBox"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        className="inputBox"
        placeholder="Enter Product price"
        value={price}
        onChange={(e) => {
        setPrice(e.target.value);
        }}
      />
      <input
        type="text"
        className="inputBox"
        placeholder="Enter Product category"
        value={category}
        onChange={(e) => {
        setCategory(e.target.value);
        }}
      />
      <input
        type="text"
        className="inputBox"
        placeholder="Enter Product company"
        value={company}
        onChange={(e) => {
        setCompany(e.target.value);
        }}
      />
      <button onClick={addProduct} className="appButton">Add Product</button>
    </div>
  );
};

export default AddProduct;
