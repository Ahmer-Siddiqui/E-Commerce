const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
  searchProduct
} = require("../../controller/product/productController");

router.route("/getProduct").get(getProduct);
router.route("/addProduct").post(addProduct);
router.route("/getSingleProduct/:id").get(getSingleProduct);
router.route("/deleteSingleProduct/:id").delete(deleteSingleProduct);
router.route("/updateSingleProduct/:id").put(updateSingleProduct);
router.route("/search/:key").get(searchProduct);

module.exports = router;
