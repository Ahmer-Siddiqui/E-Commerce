import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./productList.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  allProducts,
  deleteProduct,
  getSingleProduct,
  searchingProducts,
} from "../../features/product/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [key, setKey] = useState("");
  const products = useSelector((state) => state.product.products);

  const onDeleteProductHandler = async (id) => {
    dispatch(deleteProduct(id));
    dispatch(allProducts());
  };
  const onSearchHandler = async (e) => {
    setKey(e.target.value);
  };

  const onUpdateHandler = (id) => {
    dispatch(getSingleProduct(id));
    navigate(`/update/${id}`);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (key) {
        dispatch(searchingProducts(key));
      } else {
        dispatch(allProducts());
      }
    }, 1000);
    return () => clearTimeout(timerId);
  }, [key]);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <div className="productList mainSize">
      <h3>Product List</h3>
      <input
        type="text"
        className="search-product-box"
        onChange={onSearchHandler}
        placeholder="Search Product"
      />
      <div className="container-fluid">
        <div className="cardsMain">
          {products.length > 0 ? (
            products.map((item, index) => {
              return (
                <div key={index}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                    />
                    <Card.Body>
                      <Card.Title className="text-start">
                        {item.name}
                      </Card.Title>
                      <h5 className="text-start">
                        {item.company}{" "}
                        <span
                          className="fw-bold fs-6 px-2 rounded"
                          style={{ border: "1px solid black" }}
                        >
                          Price Rs:{item.price}
                        </span>
                      </h5>
                      {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
                      <div className="d-flex justify-content-center">
                        <Button
                          variant="primary"
                          className="mx-1"
                          onClick={() => {
                            onUpdateHandler(item._id);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => {
                            onDeleteProductHandler(item._id);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })
          ) : (
            <h1>No Result Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

// function BasicExample({ item, index }) {
//   console.log(item);
//   return (
//     <div key={index} className="col-3">
//       <Card style={{ width: "18rem" }}>
//         <Card.Img
//           variant="top"
//           src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
//         />
//         <Card.Body>
//           <Card.Title className="text-start">{item.name}</Card.Title>
//           <h5 className="text-start">
//             {item.company}{" "}
//             <span
//               className="fw-bold fs-6 px-2 rounded"
//               style={{ border: "1px solid black" }}
//             >
//               Price Rs:{item.price}
//             </span>
//           </h5>
//           {/* <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text> */}
//           <div className="d-flex justify-content-center">
//             <Button
//               variant="primary"
//               className="mx-1"
//               onClick={() => {
//                 onUpdateHandler(item._id);
//               }}
//             >
//               Edit
//             </Button>
//             <Button
//               variant="danger"
//               onClick={() => {
//                 onDeleteProductHandler(item._id);
//               }}
//             >
//               Delete
//             </Button>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

export default ProductList;
