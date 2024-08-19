const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { RegistrationModel } = require("./Schema");
const { connectDb, mongoose } = require("./db");
const { handleRegistration, handleLogin } = require("./service");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();


app.use(cors());
app.use(bodyParser.json());
connectDb();


const jwtUserkey = process.env.JWT_USERKEY;


app.get("/", (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.send("Server working fine and connected to Database");
    return;
  }
  res.send("Server started and working fine");
});


app.post("/registration", (apiReq, apiRes) => {
  handleRegistration(apiReq, apiRes);
});


app.get("/login/:username/:password", (apiReq, apiRes) => {
  handleLogin(apiReq, apiRes);
});



//  authorization middleware

// const verifyUser = async (username) => {
//   const dbResponse = await RegistrationModel.findOne({ username });
//   if (dbResponse._id) {
//     return true;
//   }
//   return false;
// };

// const auth = async (req, res, next) => {
//   if (req.headers.auth) {
//     const userToken = req.headers.auth;
//     try {
//       const tokenDecoded = jwt.verify(userToken, jwtUserkey);
//       const username = tokenDecoded.data;
//       const response = await verifyUser(username);
//       if (response) {
//         next();
//       } else {
//         res.send(400);
//       }
//     } catch (error) {
//       res.status(400).send("Invalid token");
//     }
//   } else {
//     res.status(400).send("API error");
//     return;
//   }
// };


app.listen(4000, () => {
  console.log("Server started at 4000");
});
