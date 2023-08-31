const express = require('express');
const cors = require('cors');
require('./db/config')
const User = require('./db/User')
const app = express(); 

app.use(express.json())
app.use(cors())

app.post("/register", async(req, resp)=>{
    let user = await User.create(req.body)
    console.log(user);

    resp.send(req.body)
})

app.listen(5000,()=>{
    console.log(`Server is Running...`);
})
 