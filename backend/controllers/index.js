var mongoose = require("mongoose");
var { siteSchema } = require("../models/site");
var { productSchema, productCategorySchema } = require("../models/product");
var { reviewSchema } = require("../models/review");
var { shopSchema } = require("../models/shop");
var { userSchema } = require("../models/user");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const Site = mongoose.model("Site", siteSchema);
const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);
const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);
const Shop = mongoose.model("Shop", shopSchema);
const Review = mongoose.model("Review", reviewSchema);

// Retrieve website information
async function showSite(req, res, next) {
  res.json(await Site.find({}));
}

// Retrieve all product categories
async function listAllCategories(req, res, next) {
  res.json(await ProductCategory.find({}));
}

// Retrieve recently created products
async function listRecentProducts(req, res, next) {
  res.json(await Product.find({}).sort({ created_at: -1 }).limit(15));
}

// Retrieve recently created shops
async function listRecentShops(req, res, next) {
  res.json(await Shop.find({}).sort({ created_at: -1 }).limit(15));
}

// Retrieve all product that belongs to the specified category
async function listCategoryProducts(req, res, next) {
  const category = await ProductCategory.find({ name: req.query.categoryName });
  const products = await Product.find({ categories: category })
    .sort({ created_at: -1 })
    .limit(15);
  res.json(products);
}

// Retrieve all product that belongs to the specified shop
async function listShopProducts(req, res, next) {
  const shop = await Shop.findById(req.query.shopID);
  const products = await Product.find({ shop: shop }).sort({ created_at: -1 });
  res.json(products);
}

// Retrieve one single product category
async function showProductCategory(req, res, next) {
  res.json(await ProductCategory.findById(req.query.id));
}

// Retrieve one single shop
async function showShop(req, res, next) {
  res.json(await Shop.findById(req.query.id));
}

// Retrieve one single product
async function showProduct(req, res, next) {
  res.json(await Product.findById(req.query.id));
}

// Add review to a product
async function addProductReview(req, res, next) {
  const product = await Product.findById(req.query.productID);
  const user = await User.findById(req.query.userID);
  const newReview = await new Review({
    rating: req.body.rating,
    content: req.body.content,
    product: product,
    user: user,
  });
  newReview.save();

  // update product
  await Product.findByIdAndUpdate(req.query.productID, {
    $push: { reviews: newReview },
  });

  // update user
  await User.findByIdAndUpdate(req.query.userID, {
    $push: { reviews: newReview },
  });

  res.json(newReview);
}

//  Remove product review
async function removeProductReview(req, res, next) {
  const review = await Review.findByIdAndRemove(req.query.reviewID);

  // update product
  await Product.findByIdAndUpdate(review.product._id, {
    $pull: { reviews: review._id },
  });

  // update user
  await User.findByIdAndUpdate(review.user._id, {
    $pull: { reviews: review._id },
  });

  res.json(newReview);
}

module.exports = {
  showSite,
  listAllCategories,
  listRecentProducts,
  listRecentShops,
  listCategoryProducts,
  listShopProducts,
  showProductCategory,
  showShop,
  showProduct,
  addProductReview,
  removeProductReview,
};
