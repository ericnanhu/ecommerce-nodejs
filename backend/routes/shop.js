var express = require("express");
var router = express.Router();

const multer = require("multer");
const fs = require("fs");

// Setup shop logo upload
const storageShopLogo = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = __basedir + `/uploads/shop/${req.query.shopID}/logo`;
    fs.mkdirSync(path, { recursive: true });
    return cb(null, path);
  },
  filename: function (req, file, cb) {
    const extArray = file.mimetype.split("/");
    const extension = extArray[extArray.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

const uploadShopLogo = multer({ storage: storageShopLogo });

var {
  createShop,
  showShop,
  updateShop,
  deleteShop,
} = require("../controllers/seller/shop");

router.post("/create", createShop);
router.get("/show", showShop);
router.put("/update", uploadShopLogo.single("logo"), updateShop);
router.delete("/delete", deleteShop);

// Setup product image upload
const storageProductImage = multer.diskStorage({
  destination: function (req, file, cb) {
    const path =
      __basedir +
      `/uploads/shop/${req.query.shopID}/product/${req.query.productID}/images`;
    fs.mkdirSync(path, { recursive: true });
    return cb(null, path);
  },
  filename: function (req, file, cb) {
    const extArray = file.mimetype.split("/");
    const extension = extArray[extArray.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

const uploadProductImage = multer({ storage: storageProductImage });

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

router.post("/product/create", createProduct);
router.get("/product/show", showProduct);
router.put("/product/update", updateProduct);
router.delete("/product/delete", deleteProduct);

router.post("/product/category/add", addProductCategory);
router.post("/product/category/remove", removeProductCategory);

router.post(
  "/product/image/add",
  uploadProductImage.single("image"),
  addProductImage
);
router.post(
  "/product/image/remove",
  uploadProductImage.single("image"),
  removeProductImage
);

module.exports = router;