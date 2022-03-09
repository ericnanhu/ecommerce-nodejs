var mongoose = require("mongoose");
var {
  siteSchema,
  productCategorySchema,
  userSchema,
  productSchema,
} = require("../database");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const Site = mongoose.model("Site", siteSchema);
const User = mongoose.model("User", userSchema);
const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);
const Product = mongoose.model("Product", productSchema);

// Site Management ============================================================
const listSite = async function (req, res, next) {
  res.json(await Site.find({}));
};

const createSite = function (req, res, next) {
  const newSite = new Site(req.body);
  newSite.save();
  res.send(newSite);
};

const updateSite = async function (req, res, next) {
  res.json(await Site.findByIdAndUpdate(req.query.id, req.body, { new: true }));
};

const showSite = async function (req, res, next) {
  res.json(await Site.findById(req.query.id));
};

const deleteSite = async function (req, res, next) {
  res.json(await Site.findByIdAndDelete(req.query.id));
};

// User Management ==========================================================
const listUser = async function (req, res, next) {
  res.json(await User.find({}));
};

var { hashPass } = require("../auth");

const createUser = async function (req, res, next) {
  const hashedPass = await hashPass(req.body.password);
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPass,
  });
  newUser.save();
  res.send(newUser);
};

const updateUser = async function (req, res, next) {
  // If there is a new password
  if ("password" in req.body) {
    const hashedPass = await hashPass(req.body.password);
    req.body.password = hashedPass;
    res.json(
      await User.findByIdAndUpdate(req.query.id, req.body, { new: true })
    );
  } else {
    res.json(
      await User.findByIdAndUpdate(req.query.id, req.body, { new: true })
    );
  }
};

const showUser = async function (req, res, next) {
  res.json(await User.findById(req.query.id));
};

const deleteUser = async function (req, res, next) {
  res.json(await User.findByIdAndDelete(req.query.id));
};

// Product Category Management ===================================================
const listProductCategory = async function (req, res, next) {
  res.json(await ProductCategory.find({}));
};

const createProductCategory = function (req, res, next) {
  const newProductCategory = new ProductCategory(req.body);
  newProductCategory.save();
  res.send(newProductCategory);
};

const updateProductCategory = async function (req, res, next) {
  res.json(
    await ProductCategory.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
    })
  );
};

const showProductCategory = async function (req, res, next) {
  res.json(await ProductCategory.findById(req.query.id));
};

const deleteProductCategory = async function (req, res, next) {
  res.json(await ProductCategory.findByIdAndDelete(req.query.id));
};

// Product Management =======================================================
const listProduct = async function (req, res, next) {
  res.json(await Product.find({}));
};

const createProduct = function (req, res, next) {
  const newProduct = new Product(req.body);
  newProduct.save();
  res.send(newProduct);
};

const updateProduct = async function (req, res, next) {
  res.json(
    await Product.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
    })
  );
};

const showProduct = async function (req, res, next) {
  res.json(await Product.findById(req.query.id));
};

const deleteProduct = async function (req, res, next) {
  res.json(await Product.findByIdAndDelete(req.query.id));
};

module.exports = {
  listSite,
  createSite,
  updateSite,
  showSite,
  deleteSite,
  listUser,
  createUser,
  updateUser,
  showUser,
  deleteUser,
  listProductCategory,
  createProductCategory,
  updateProductCategory,
  showProductCategory,
  deleteProductCategory,
  listProduct,
  createProduct,
  updateProduct,
  showProduct,
  deleteProduct,
};
