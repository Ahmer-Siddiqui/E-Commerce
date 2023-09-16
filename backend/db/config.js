const mongoose = require('mongoose');

const connectDB = async ()=>{
   const conn = await mongoose.connect(process.env.MONGO_URL)
   const db = await mongoose.connection;
   console.log(`${db.name} database Connected...`);
}

connectDB(); 