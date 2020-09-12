const userSchame = require("../model/user");
const slugify = require("slugify");
exports.signup = (req, res) => {
  const { nama, gender, email } = req.body;
  // return res.json({ namaProduk, pembuat, price });
  const slug = slugify(email);
  const newUser = new userSchame({
    nama,
    gender,
    email,
  });
  newUser.save((err, user) => {
    if (err) return res.json({ err });
    return res.json({ user });
  });
};
