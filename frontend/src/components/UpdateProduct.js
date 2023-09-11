import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const params = useParams(); 
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [data, setData] = useState({});

  const updateProduct = async () => {
    console.log(name,price,category,company);
  }
  const getProductsDetails = async () => {
      console.log(params);
    let result = await fetch(`http://localhost:5000/products/${params.id}`);
    result = await result.json();
    // setProducts(result);
  };      
  useEffect(()=>{
    getProductsDetails()
  },[])
  return (
    <div className="product">
      <h1>Update Product</h1>
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
      <button onClick={updateProduct} className="appButton">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
