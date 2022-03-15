var mongoose = require("mongoose");
var {
  productCategorySchema,
  productSchema,
  productImageSchema,
} = require("../../models/product");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);
const Product = mongoose.model("Product", productSchema);
const ProductImage = mongoose.model("ProductImage", productImageSchema);

const listProductCategory = async function (req, res, next) {
  res.json(await ProductCategory.find({}));
};

const createProductCategory = function (req, res, next) {
  const newProductCategory = new ProductCategory({
    name: req.body.name,
  });
  newProductCategory.save();
  res.send(newProductCategory);
};

const updateProductCategory = async function (req, res, next) {
  res.json(
    await ProductCategory.findByIdAndUpdate(
      req.query.id,
      {
        name: req.body.name,
      },
      {
        new: true,
      }
    )
  );
};

const showProductCategory = async function (req, res, next) {
  res.json(await ProductCategory.findById(req.query.id).populate("products"));
};

const deleteProductCategory = async function (req, res, next) {
  res.json(await ProductCategory.findByIdAndDelete(req.query.id));
};

// Product Management =======================================================
const listProduct = async function (req, res, next) {
  res.json(await Product.find({}).populate("categories"));
};

const showProduct = async function (req, res, next) {
  res.json(
    await Product.findById(req.query.id)
      .populate("images")
      .populate("categories")
      .populate("reviews")
      .populate("shop")
  );
};

const deleteProduct = async function (req, res, next) {
  res.json(await Product.findByIdAndDelete(req.query.id));
};

// Product Image Management
const listProductImage = async function (req, res, next) {
  res.json(await ProductImage.find({}).populate("product"));
};

const showProductImage = async function (req, res, next) {
  res.json(await ProductImage.findById(req.query.id).populate("product"));
};

const deleteProductImage = async function (req, res, next) {
  res.json(await ProductImage.findByIdAndDelete(req.query.id));
};

module.exports = {
  listProductCategory,
  createProductCategory,
  updateProductCategory,
  showProductCategory,
  deleteProductCategory,
  listProduct,
  showProduct,
  deleteProduct,
  listProductImage,
  showProductImage,
  deleteProductImage,
};
