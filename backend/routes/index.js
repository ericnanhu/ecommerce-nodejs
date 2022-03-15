var express = require("express");
var router = express.Router();
var {
  showSite,
  showAllCategories,
  showRecentProducts,
  showProduct,
  showCategoryProducts,
} = require("../controllers/index");

router.get("/site", showSite);

router.get("/category/all", showAllCategories);
router.get("/category", showCategoryProducts);

router.get("/product/recent", showRecentProducts);
router.get("/product", showProduct);

module.exports = router;
