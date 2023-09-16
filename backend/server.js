const express = require("express");
const app = express();
const {PORT} = require('dotenv').config().parsed;
const cors = require("cors");
const verifyToken = require('./middleware/auth')
require("./db/config"); 

app.use(express.json()); 
app.use(cors());
app.use(verifyToken)

app.use("/user",require('./routes/user/userRoute') );
app.use("/product",require("./routes/product/productRoute"));
       
app.listen(PORT, () => {
  console.log(`Server is Running...`);
});
