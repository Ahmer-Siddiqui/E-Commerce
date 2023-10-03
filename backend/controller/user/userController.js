const User = require("../../model/user/userProduct");
const Jwt = require("jsonwebtoken");
const { jwtKey } = process.env;

const loginUser = async (req, resp) => {
  try {
    const { email, password } = req.body;
    if (password && email) {
      let user = await User.findOne({ email, password }).select("-password");
      if (user) {
        Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
          if (err) {
            resp.send({ 
              result: "Token error",
            });
          }
          else{
            resp.status(200).json({ user, auth: token });
          }
        });
      } 
      else {
        resp.status(404).json({ result: "No User Found" });
      } 
    } else {
    return  resp.status(400).json({ error: "Email and password are required" });
    }
  } 
  catch (err) {
    resp.status(500).json({ error: "Internal Server Error" });
  }
};

const registerUser = async (req, resp) => {
  try {
    let user = await User.create(req.body);
    let result = user.toObject();
    delete result.password;
    Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
      if (err) {
        resp.send({
          result: "Token error",
        });
      }
      resp.send({ result, auth: token });
    });
  } catch (err) {
    if(err.name === "MongoServerError"){
      resp.send({ error: "MongoServerError found"});
    }
    else{
      resp.send({ error: "Something went wrong"});
    }
  }
};

module.exports = { registerUser, loginUser }
