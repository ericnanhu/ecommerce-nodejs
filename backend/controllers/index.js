var mongoose = require("mongoose");
var { siteSchema } = require("../models/site");
var {
  productSchema,
  productImageSchema,
  productCategorySchema,
} = require("../models/product");
var { reviewSchema, reviewImageSchema } = require("../models/review");
var { shopSchema } = require("../models/shop");
var { roleSchema, userSchema } = require("../models/user");

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

// Retrieve one single product
const showProduct = async function (req, res, next) {
  res.json(await Product.findById(req.query.id));
};

// Retrieve all product that belongs to the specified category
const showCategoryProducts = async function (req, res, next) {
  const category = await ProductCategory.find({ name: req.query.name });
  const products = await Product.find({ "categories.id": category._id })
    .sort({ created_at: -1 })
    .limit(10);
  res.json(products);
};

module.exports = {
  showSite,
  showAllCategories,
  showRecentProducts,
  showProduct,
  showCategoryProducts,
};
