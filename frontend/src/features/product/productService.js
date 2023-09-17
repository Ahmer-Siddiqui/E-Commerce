import axios from "axios";

const PRODUCT_API_URL = "/product";

const getAllProduct = async (branchData) => {
  const response = await axios(`${PRODUCT_API_URL}/getProduct`, {
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
  const response = await axios(
    `${PRODUCT_API_URL}/search/${key}`,
    {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    }
  );
  return response.data;
};

const productService = { getAllProduct, searchProductByKey, deleteSingleProduct };

export default productService;
