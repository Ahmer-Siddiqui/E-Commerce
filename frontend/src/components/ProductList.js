import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id)=>{
    let result = await fetch(`http://localhost:5000/product/${id}`,{
          method: 'Delete',
          // body: JSON.stringify({email,password}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
    result = await result.json();
    if(result){
      getProducts()
    }
    console.log(result);
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="product-list">
      <h3>Product List</h3>
      <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {products.map((item, index) => {
        return (
          <ul key={index}>
            <li>{index + 1}.</li>
            <li>{item.name}</li>
            <li>$ {item.price}</li>
            <li>{item.category}</li>
            <li><button onClick={()=>{deleteProduct(item._id)}}>Delete</button></li>
          </ul>
        );
      })}
    </div>
  );
};

export default ProductList;
