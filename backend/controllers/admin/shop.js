var mongoose = require("mongoose");
var { shopSchema } = require("../../models/shop");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");
const Shop = mongoose.model("Shop", shopSchema);

// Shop Management ===================================================
const listShop = async function (req, res, next) {
  res.json(await Shop.find({}).populate("user"));
};

// const createShop = function (req, res, next) {
//   const newShop = new Shop(req.body);
//   newShop.save();
//   res.send(newShop);
// };

// const updateShop = async function (req, res, next) {
//   res.json(
//     await Shop.findByIdAndUpdate(req.query.id, req.body, {
//       new: true,
//     })
//   );
// };

const showShop = async function (req, res, next) {
  res.json(await Shop.findById(req.query.id).populate("user").populate("products"));
};

const deleteShop = async function (req, res, next) {
  res.json(await Shop.findByIdAndDelete(req.query.id));
};

module.exports = {
  listShop,
  showShop,
  deleteShop,
};
