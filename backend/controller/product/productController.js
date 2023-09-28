const Product = require("../../model/product/productModel");

const addProduct = async (req, resp) => {
  try {
    let product = await Product.create(req.body);
    if(product){ 
      resp.send({result: "Add Data Successfully"});
    }else{
      resp.send({result: "Error Occurred"});
    }
  } catch (err) {
    resp.send({result: "Error Occurred",error: err});
  }
};

const getProduct = async (req, resp) => {
  try {
    let products = await Product.find();
    if (products) {
      resp.send(products);
    } else {
      resp.send({ result: "No Products Found" });
    }
  } catch (err) {
    resp.send({result: "Error Occurred",error: err});

  }
};
const deleteSingleProduct = async (req, resp) => {
  try{
    let result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result);
  }catch(err){
    resp.send({result: "Error Occurred",error: err});
  }
};
  
const updateSingleProduct = async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
};

const getSingleProduct = async (req, resp) => {
  let products = await Product.findOne({ _id: req.params.id });
  if (products) {
    resp.send(products);
  } else {
    resp.send({ result: "No Products Found" });
  }
};
const searchProduct = async (req, resp) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
};

module.exports = {
  addProduct,
  getProduct,
  searchProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
};
