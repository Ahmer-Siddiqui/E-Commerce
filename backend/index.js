const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Jwt = require("jsonwebtoken");
const jwtKey = "e-comm";
const Product = require("./db/Product");
const app = express();

app.use(express.json());
app.use(cors());

function verifyToken(req, res, next) {
  let token = req.headers["authorization"];
  if (token) {
    token = token;
    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        res.status(401).send({ result: "Please provide valid token" });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({ result: "Please add token with header" });
  }
  console.log("Middleware Call", token);
}

app.post("/register", verifyToken, async (req, resp) => {
  let user = await User.create(req.body);
  let result = user.toObject();
  delete result.password;
  Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      resp.send({
        result: "Something went wrong, Please try after sometime",
      });
    }
    resp.send({ result, auth: token });
  });
});

app.post("/login",verifyToken ,async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          resp.send({
            result: "Something went wrong, Please try after sometime",
          });
        }
        resp.send({ user, auth: token });
      });
    } else {
      resp.send({ result: "No User Found" });
    }
  } else {
    resp.send({ result: "No User Found" });
  }
});

app.post("/add-product", verifyToken, async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});

app.get("/products",verifyToken ,async (req, resp) => {
  let products = await Product.find();
  if (products) {
    resp.send(products);
  } else {
    resp.send({ result: "No Products Found" });
  }
});
app.get("/products/:id", verifyToken ,async (req, resp) => {
  let products = await Product.findOne({ _id: req.params.id });
  if (products) {
    resp.send(products);
  } else {
    resp.send({ result: "No Products Found" });
  }
});

app.delete("/product/:id",verifyToken ,async (req, resp) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});
app.put("/products/:id",verifyToken ,async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});
app.get("/search/:key", verifyToken, async (req, resp) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});
       
app.listen(5000, () => {
  console.log(`Server is Running...`);
});
