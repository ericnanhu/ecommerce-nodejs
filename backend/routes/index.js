var express = require("express");
var router = express.Router();
var {
  showSite,
  userLogin,
  showAllCategories,
  showRecentProducts,
  showCategoryProducts,
} = require("../controllers/index");

router.get("/site", showSite);

router.get("/category/all", showAllCategories);
router.get("/category", showCategoryProducts);

router.get("/product/recent", showRecentProducts);


router.post("/login", userLogin);

module.exports = router;
