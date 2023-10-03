import React, { useEffect, useState } from "react";
import "./updateProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSingleProduct,
  updateSingleProduct,
} from "../../features/product/productSlice";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const singleProduct = useSelector((state) => state.product.singleProduct);

  const [updateData, setUpdateData] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });

  const onUpdateProductHandler = async () => {
    dispatch(updateSingleProduct(updateData));
    navigate("/");
  };

  const getProductsDetails = async () => {
    setUpdateData(singleProduct);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, [dispatch]);

  useEffect(() => {
    getProductsDetails();
  }, [singleProduct]);
  return (
    <div className="mainSize">
      <div className="updateProduct">
        <h1>Update Product</h1>
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Product Name"
          name="name"
          value={updateData.name}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Product price"
          name="price"
          value={updateData.price}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Product category"
          name="category"
          value={updateData.category}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Product company"
          name="company"
          value={updateData.company}
          onChange={onChangeHandler}
        />
        <button onClick={onUpdateProductHandler} className="appButton">
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
