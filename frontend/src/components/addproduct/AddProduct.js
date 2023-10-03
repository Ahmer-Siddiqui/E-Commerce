import React, { useState } from "react";
import "./addProduct.css";
import { useDispatch } from "react-redux";
import { addingProduct } from "../../features/product/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    company: "",
    price: "",
  });
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    const { name, price, category, company } = productData;
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    } else {
      dispatch(addingProduct(productData));
    }
    setProductData({
      name: "",
      category: "",
      company: "",
      price: "",
    });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };
  return (
    <div className="mainSize">
      <div className="product addProduct">
        <h1>Add Product</h1>
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Product Name"
          name="name"
          value={productData.name}
          onChange={onChangeHandler}
        />
        {error && !name && (
          <span className="invalid-input">Enter valid name</span>
        )}
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Product price"
          name="price"
          value={productData.price}
          onChange={onChangeHandler}
        />
        {error && !price && (
          <span className="invalid-input">Enter valid price</span>
        )}
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Product category"
          name="category"
          value={productData.category}
          onChange={onChangeHandler}
        />
        {error && !category && (
          <span className="invalid-input">Enter valid category</span>
        )}
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Product company"
          name="company"
          value={productData.company}
          onChange={onChangeHandler}
        />
        {error && !company && (
          <span className="invalid-input">Enter valid company</span>
        )}
        <button onClick={addProduct} className="appButton">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
