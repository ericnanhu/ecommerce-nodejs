var mongoose = require("mongoose");
var { productSchema, productCategorySchema } = require("../models/product");
var { userSchema } = require("../models/user");
var { shopSchema } = require("../models/shop");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);
const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);
const Shop = mongoose.model("Shop", shopSchema);

// Create new shop
async function createShop(req, res, next) {
  const newShop = new Shop({
    name: req.body.name,
    user: req.query.userID,
  });
  newShop.save();

  // Add shop to the user
  await User.findByIdAndUpdate(req.query.userID, { shop: newShop._id });

  res.json(newShop);
}

// Show shop
async function showShop(req, res, next) {
  res.json(await Shop.findById(req.query.id));
}

// Update Shop
async function updateShop(req, res, next) {
  const updatedShop = await Shop.findByIdAndUpdate(
    req.query.shopID,
    {
      name: req.body.name,
      logo: req.file.path,
      phone: req.body.phone,
      email: req.body.email,
      description: req.body.description,
      link: {
        website: req.body.website,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin,
        pinterest: req.body.pinterest,
      },
      address: {
        country: req.body.country,
        province: req.body.province,
        city: req.body.city,
        postCode: req.body.postCode,
        street: req.body.street,
      },
    },
    {
      new: true,
    }
  );

  res.json(updatedShop);
}

// Delete Shop
async function deleteShop(req, res, next) {
  // Delete Shop
  const deletedShop = await Shop.findByIdAndRemove(req.query.shopID);
  // Update user
  await User.findByIdAndUpdate(deletedShop.user._id, {
    $unset: { shop: 1 },
  });
  res.json(deletedShop);
}

// Create Product
async function createProduct(req, res, next) {
  const newProduct = new Product({
    name: req.body.name,
    price: {
      number: req.body.priceNumber,
      currency: req.body.priceCurrency,
    },
    description: req.body.description,
    address: {
      country: req.body.country,
      province: req.body.province,
      city: req.body.city,
      postCode: req.body.postCode,
      street: req.body.street,
    },
    shop: req.query.shopID,
  });
  newProduct.save();

  // Add product to shop
  await Shop.findByIdAndUpdate(req.query.shopID, {
    $push: { shop: newProduct._id },
  });

  res.json(newProduct);
}

// Show Product
async function showProduct(req, res, next) {
  res.json(await Product.findById(req.query.productID));
}

// Update Product
async function updateProduct(req, res, next) {
  const updatedProduct = await Product.findByIdAndUpdate(req.query.productID, {
    name: req.body.name,
    price: {
      number: req.body.priceNumber,
      currency: req.body.priceCurrency,
    },
    description: req.body.description,
    address: {
      country: req.body.country,
      province: req.body.province,
      city: req.body.city,
      postCode: req.body.postCode,
      street: req.body.street,
    },
  });

  res.json(updatedProduct);
}

// Delete Product
async function deleteProduct(req, res, next) {
  const deletedProduct = await Product.findByIdAndRemove(req.query.productID);
  await Shop.findByIdAndUpdate(deletedProduct.shop._id, {
    $pull: { product: deletedProduct._id },
  });
  res.json(deletedProduct);
}

// Add product category
async function addProductCategory(req, res, next) {
  // update product
  const updatedProduct = await Product.findByIdAndUpdate(req.query.productID, {
    $push: { categories: req.query.categoryID },
  });

  // update product category
  await ProductCategory.findByIdAndUpdate(req.query.categoryID, {
    $push: { products: req.query.productID },
  });

  res.json(updatedProduct);
}

// Remove product category
async function removeProductCategory(req, res, next) {
  // update product
  const updatedProduct = await Product.findByIdAndUpdate(req.query.productID, {
    $push: { categories: req.query.categoryID },
  });

  // update product category
  await ProductCategory.findByIdAndUpdate(req.query.categoryID, {
    $push: { products: req.query.productID },
  });

  res.json(updatedProduct);
}

// Add product image
async function addProductImage(req, res, next) {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.query.productID,
    { $push: { images: req.file.path } },
    { new: true }
  );
  res.json(updatedProduct);
}

// Remove product image
async function removeProductImage(req, res, next) {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.query.productID,
    { $pull: { images: req.file.path } },
    { new: true }
  );
  res.json(updatedProduct);
}

module.exports = {
  createShop,
  showShop,
  updateShop,
  deleteShop,
  createProduct,
  showProduct,
  updateProduct,
  deleteProduct,
  addProductCategory,
  removeProductCategory,
  addProductImage,
  removeProductImage,
};
