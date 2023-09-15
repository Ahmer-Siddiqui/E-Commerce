import axios from 'axios'

const PRODUCT_API_URL = "";


const getAllProduct = async (branchData) => {
    const response = await axios(`${PRODUCT_API_URL}deleteproduct`);
    return response.data
  }
  
  const productService = {getAllProduct};
  
  export default productService;
  