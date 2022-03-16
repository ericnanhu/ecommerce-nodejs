var mongoose = require("mongoose");
var { productCategorySchema, productSchema } = require("../../models/product");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);
const Product = mongoose.model("Product", productSchema);

async function listProductCategory(req, res, next) {
  res.json(await ProductCategory.find({}));
}

async function createProductCategory(req, res, next) {
  const newProductCategory = new ProductCategory({
    name: req.body.name,
  });
  newProductCategory.save();
  res.send(newProductCategory);
}

async function updateProductCategory(req, res, next) {
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
}

async function showProductCategory(req, res, next) {
  res.json(await ProductCategory.findById(req.query.id).populate("products"));
}

async function deleteProductCategory(req, res, next) {
  res.json(await ProductCategory.findByIdAndDelete(req.query.id));
}

// Product Management =======================================================
async function listProduct(req, res, next) {
  res.json(await Product.find({}).populate("categories"));
}

async function showProduct(req, res, next) {
  res.json(
    await Product.findById(req.query.id)
      .populate("categories")
      .populate("reviews")
      .populate("shop")
  );
}

async function deleteProduct(req, res, next) {
  res.json(await Product.findByIdAndDelete(req.query.id));
}

module.exports = {
  listProductCategory,
  createProductCategory,
  updateProductCategory,
  showProductCategory,
  deleteProductCategory,
  listProduct,
  showProduct,
  deleteProduct,
};
