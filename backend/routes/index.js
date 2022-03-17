var express = require("express");
var router = express.Router();
var {
  showSite, // Retrieve website information

  listAllCategories, // Retrieve all product categories
  listRecentProducts, // Retrieve recently created products
  listRecentShops, // Retrieve recently created shops

  listCategoryProducts, // Retrieve all product that belongs to the specified category
  listShopProducts, // Retrieve all product that belongs to the specified shop

  showProductCategory, // Retrieve one single product category
  showShop, // Retrieve one single shop
  showProduct, // Retrieve one single product

  addProductReview, // Add review to a product
  removeProductReview, //  Remove product review
} = require("../controllers/index");

router.get("/site", showSite);

router.get("/category/all", listAllCategories);
router.get("/product/recent", listRecentProducts);
router.get("/shop/recent", listRecentShops);

router.get("/category/product", listCategoryProducts);
router.get("/shop/product", listShopProducts);

router.get("/category/info", showProductCategory);
router.get("/shop/info", showShop);
router.get("/product/info", showProduct);

router.get("/product/review/add", addProductReview);
router.get("/product/review/remove", removeProductReview);

module.exports = router;
