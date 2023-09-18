import axios from "axios";

const PRODUCT_API_URL = "/product";

const getAllProduct = async () => {
  const response = await axios(`${PRODUCT_API_URL}/getProduct`, {
    headers: {
      authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
  return response.data;
};
const updateProduct = async (data) => {
  const response = await axios.put(
    `${PRODUCT_API_URL}/updateSingleProduct/${data._id}`,
    data,
    {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    }
  );
  return response.data;
};

const singleProduct = async (id) => {
  const response = await axios(`${PRODUCT_API_URL}/getSingleProduct/${id}`, {
    headers: {
      authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
  return response.data;
};

const addProduct = async (data) => {
  const response = await axios.post(`${PRODUCT_API_URL}/addProduct`, data, {
    headers: {
      authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
  return response.data;
};

const deleteSingleProduct = async (id) => {
  const response = await axios.delete(
    `${PRODUCT_API_URL}/deleteSingleProduct/${id}`,
    {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    }
  );
  return response.data;
};
const searchProductByKey = async (key) => {
  const response = await axios(`${PRODUCT_API_URL}/search/${key}`, {
    headers: {
      authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
  return response.data;
};

const productService = {
  getAllProduct,
  searchProductByKey,
  deleteSingleProduct,
  addProduct,
  singleProduct,
  updateProduct,
};

export default productService;
