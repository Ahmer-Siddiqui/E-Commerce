const Product = require("../../model/product/productModel");

const addProduct = async (req, resp) => {
  try {
    let product = await Product.create(req.body);
    if (product) {
      resp.status(200).json({ result: "Add Data Successfully" });
    } else {
      resp.send({ result: "Error Occurred" });
    }
  } catch (err) {
    resp.send({ error: err });
  }
};

const getProduct = async (req, resp) => {
  try {
    let products = await Product.find();
    if (products) {
      resp.status(200).json(products);
    } else {
      resp.status(404).json({ result: "No Products Found" });
    }
  } catch (error) {
    resp.send({ err: error });
  }
};

const deleteSingleProduct = async (req, resp) => {
  try {
    let result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result);
  } catch (err) {
    resp.send({ error: err });
  }
};

const updateSingleProduct = async (req, resp) => {
  try {
    let result = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    resp.send(result);
  } catch (err) {
    resp.send({ error: err });
  }
};

const getSingleProduct = async (req, resp) => {
  try {
    let products = await Product.findOne({ _id: req.params.id });
    if (products) {
      resp.status(200).json(products);
    } else {
      resp.status(404).json({ result: "No Products Found" });
    }
  } catch (err) {
    resp.send({ error: err });
  }
};
const searchProduct = async (req, resp) => {
  try {
    let result = await Product.find({
      $or: [
        { name: { $regex: req.params.key } },
        { company: { $regex: req.params.key } },
        { category: { $regex: req.params.key } },
        { price: { $regex: req.params.key } },
      ],
    });
    if(result){
      resp.status(200).json(result);
    }
    else{
      resp.status(404).json({result: "Result not found"});
    }
  } catch (error) {
    resp.send({ error: err });
  }
};

module.exports = {
  addProduct,
  getProduct,
  searchProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
};
