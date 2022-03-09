var mongoose = require("mongoose");
var {
  siteSchema,
  userSchema,
  productSchema,
  productCategorySchema,
} = require("../database");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const Site = mongoose.model("Site", siteSchema);
const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);
const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);

// Retrieve website information
const showSite = async function (req, res, next) {
  res.json(await Site.find({}));
};

// Retrieve all product categories
const showAllCategories = async function (req, res, next) {
  res.json(await ProductCategory.find({}));
};

// Retrieve recently created products
const showRecentProducts = async function (req, res, next) {
  res.json(await Product.find().sort({ created_at: -1 }).limit(10));
};

// Retrieve all product that belongs to the specified category
const showCategoryProducts = async function (req, res, next) {
  const category = await ProductCategory.find({ name: req.query.name });
  const products = await Product.find({ "categories.id": category._id })
    .sort({ created_at: -1 })
    .limit(10);
  res.json(products);
};

// User Auth
var { authUser } = require("../auth");
const userLogin = async function (req, res, next) {
  const user = await User.findOne({ email: req.body.email });
  const match = await authUser(req.body.password, user.password);
  if (match == true) {
    res.send("User Verified!");
  } else {
    res.send("Username or password not correct.");
  }
};

module.exports = {
  showSite,
  showAllCategories,
  showRecentProducts,
  showCategoryProducts,
  userLogin,
};
