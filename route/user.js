const { signup } = require("../controller/user");
const express = require("express");
const route = express.Router();
route.post("/signup", signup);
module.exports = route;
