var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  nama: String,
  tanggalLahir: {
    type: Date,
    default: Date.now(),
  },
  gender: Boolean,
  email: String,
  slug: String,
});

module.exports = mongoose.model("User", userSchema);
