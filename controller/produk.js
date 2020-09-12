const produkSchame = require("../model/produk");
const slugify = require("slugify");
exports.create = (req, res) => {
  const { namaProduk, pembuat, price } = req.body;
  // return res.json({ namaProduk, pembuat, price });
  const slug = slugify(namaProduk);
  const NewProduk = new produkSchame({
    namaProduk,
    pembuat,
    price,
    slug,
  });
  NewProduk.save((err, produk) => {
    if (err) return res.json({ err });
    return res.json({ produk });
  });
};

exports.update = (req, res) => {
  return res.send("update");
};

exports.remove = (req, res) => {
  return res.send("delete");
};

exports.read = (req, res) => {
  const { namaProduk } = req.body;
  produkSchame.find({ namaProduk }).exec((err, produk) => {
    if (err) return res.json({ err });
    return res.json({ produk });
  });
};
