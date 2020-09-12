const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://muflih1299:Muflih99@cluster0.db8tt.gcp.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (salah) => {
    // if (err) return console.log(err);
    //   console.log("sukses");
    salah ? console.log(salah) : console.log("sukses");
  }
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const produkRoute = require("./route/produk");
const authRoute = require("./route/user");
app.use("/api", authRoute, produkRoute);
app.listen(port, (eror, v2) => {
  if (eror) return console.log(eror);
  console.log(`Example app listening at http://localhost:${port}`);
});
