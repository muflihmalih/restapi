var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var produkSchema = new Schema({
  namaProduk: String,
  pembuat: {
    type: String,
    default: "lih",
  },
  price: Number,
  slug: String,
});

module.exports = mongoose.model("Produk", produkSchema);
