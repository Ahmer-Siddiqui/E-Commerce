const mongoose = require('mongoose');

const connectDB = async ()=>{
   const conn = await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")
   const db = await mongoose.connection;
   console.log(`${db.name} database Connected...`);

}

connectDB();