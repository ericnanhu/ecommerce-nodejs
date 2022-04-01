var express = require("express");
var router = express.Router();
var { uploadProductImage, uploadShopLogo } = require("../upload");

// Shop
var {
  createShop,
  showShop,
  updateShop,
  deleteShop,
} = require("../controllers/seller/shop");

router.post("/shop/create", uploadShopLogo.single("logo"), createShop);
router.get("/shop/show", showShop);
router.put("/shop/update", uploadShopLogo.single("logo"), updateShop);
router.delete("/shop/delete", deleteShop);

var {
  createProduct,
  showProduct,
  updateProduct,
  deleteProduct,
  addProductCategory,
  removeProductCategory,
  addProductImage,
  removeProductImage,
} = require("../controllers/seller/product");

router.post("/product/create", uploadProductImage.array("images"), createProduct);
router.get("/product/show", showProduct);
router.put("/product/update", updateProduct);
router.delete("/product/delete", deleteProduct);

router.post("/product/category/add", addProductCategory);
router.post("/product/category/remove", removeProductCategory);

router.post(
  "/product/image/add",
  uploadProductImage.single("productImage"),
  addProductImage
);
router.post(
  "/product/image/remove",
  uploadProductImage.single("productImage"),
  removeProductImage
);

module.exports = router;
