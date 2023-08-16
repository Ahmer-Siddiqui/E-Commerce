const express = require('express');
const mongoose = require('mongoose');
const app = express(); 

const connectDB = async ()=>{
    mongoose.connect('mongodb://0.0.0.0:27017/e-comm');
    const productSchema = new mongoose.Schema({});
    const Product = mongoose.model('product', productSchema);
    const data = await Product.find()  
    console.log(data);
}
connectDB()

app.listen(5000)
