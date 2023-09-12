const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");
const app = express();

app.use(express.json());
app.use(cors());
 
app.post("/register", async (req, resp) => {
  let user = await User.create(req.body); 
  let result = user.toObject();
  delete result.password;
  resp.send(req.body);
});
app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No User Found" });
    }
  } else {
    resp.send({ result: "No User Found" });
  }
});

app.post("/add-product", async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});

app.get("/products", async (req, resp) => {
  let products = await Product.find();
  if(products){
    resp.send(products)
  }else{
    resp.send({result: "No Products Found"});
  }
});
app.get("/products/:id", async (req, resp) => {
  let products = await Product.findOne({_id: req.params.id});
  if(products){
    resp.send(products)
  }else{
    resp.send({result: "No Products Found"});
  }
});

app.delete("/product/:id",async(req, resp)=>{ 
  let result = await Product.deleteOne({_id: req.params.id});
  resp.send(result) 
})
app.put("/products/:id",async(req, resp)=>{ 
  let result = await Product.updateOne({_id: req.params.id},{$set:req.body});
  resp.send(result) 
})
app.get("/search/:key",async(req, resp)=>{
  let result = await Product.find({
    "$or":[
      {name:{$regex: req.params.key}},
      {company:{$regex: req.params.key}},
      {category:{$regex: req.params.key}}
    ]
  })
  resp.send(result)
})
 
app.listen(5000, () => {
  console.log(`Server is Running...`);
}); 
 