const express = require("express");
const {PORT} = require('dotenv').config().parsed;
const cors = require("cors");
const verifyToken = require('./middleware/auth')
require("./db/config");
const User = require("./model/user/User");
const Jwt = require("jsonwebtoken");
const jwtKey = "e-comm";
const Product = require("./model/product/Product");
const app = express();

app.use(express.json());
app.use(cors());
app.use(verifyToken)

app.use("/user",require('./routes/user/User') );

// app.post("/add-product", verifyToken, async (req, resp) => {
//   let product = new Product(req.body);
//   let result = await product.save();
//   resp.send(result);
// });

// app.get("/products",verifyToken ,async (req, resp) => {
//   let products = await Product.find();
//   if (products) {
//     resp.send(products);
//   } else {
//     resp.send({ result: "No Products Found" });
//   }
// });
// app.get("/products/:id", verifyToken ,async (req, resp) => {
//   let products = await Product.findOne({ _id: req.params.id });
//   if (products) {
//     resp.send(products);
//   } else {
//     resp.send({ result: "No Products Found" });
//   }
// });

// app.delete("/product/:id",verifyToken ,async (req, resp) => {
//   let result = await Product.deleteOne({ _id: req.params.id });
//   resp.send(result);
// });
// app.put("/products/:id",verifyToken ,async (req, resp) => {
//   let result = await Product.updateOne(
//     { _id: req.params.id },
//     { $set: req.body }
//   );
//   resp.send(result);
// });
// app.get("/search/:key", verifyToken, async (req, resp) => {
//   let result = await Product.find({
//     $or: [
//       { name: { $regex: req.params.key } },
//       { company: { $regex: req.params.key } },
//       { category: { $regex: req.params.key } },
//     ],
//   }); 
//   resp.send(result);
// });
       
app.listen(PORT, () => {
  console.log(`Server is Running...`);
});
