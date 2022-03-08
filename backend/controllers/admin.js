var mongoose = require("mongoose");
var { siteSchema, productCategorySchema, userSchema } = require("../database");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const Site = mongoose.model("Site", siteSchema);
const User = mongoose.model("User", userSchema);
const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);

// Site Management
const listSite = async function (req, res, next) {
  res.json(await Site.find({}));
};

const createSite = function (req, res, next) {
  const newSite = new Site({
    name: req.body.name,
    description: req.body.description,
    keywords: req.body.keywords,
  });
  newSite.save();
  res.send("New Site Created!");
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

// User Management
const listUser = async function (req, res, next) {
  res.json(await User.find({}));
};

var { setPass } = require("../auth");

const createUser = function (req, res, next) {
  const userPass = setPass(req.body.password);
  res.send(userPass);
  // const newUser = new User({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: {
  //     hash: userPass.hash,
  //     salt: userPass.salt,
  //   },
  // });
  // newUser.save();
  // res.send("New User Created!");
};

// Product Category Management
const listProductCategory = async function (req, res, next) {
  res.json(await ProductCategory.find({}));
};

const createProductCategory = function (req, res, next) {
  const newProductCategory = new ProductCategory({
    name: req.body.name,
  });
  newProductCategory.save();
  res.send("New Product Category Created!");
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

module.exports = {
  listSite,
  createSite,
  updateSite,
  showSite,
  deleteSite,
  createUser,
  listProductCategory,
  createProductCategory,
  updateProductCategory,
  showProductCategory,
  deleteProductCategory,
};
