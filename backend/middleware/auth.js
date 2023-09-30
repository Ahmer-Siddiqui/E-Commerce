const Jwt = require("jsonwebtoken");
const { jwtKey } = process.env;

const verifyToken = (req, res, next) => {
  if (req.url === "/user/register") {
    next();
  } else if (req.url === "/user/login") {
    next();
  } else {
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
  }
  next()
};

module.exports = verifyToken;
