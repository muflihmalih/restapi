const express = require("express");
const route = express.Router();
const { create, remove, read, update } = require("../controller/produk");
route
  .post("/create", create)
  .post("/read", read)
  .put("/update", update)
  .delete("/delete", remove);
module.exports = route;
