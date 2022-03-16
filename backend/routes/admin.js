var express = require("express");
var router = express.Router();

// Site Management
// Admin can list, create, update, show and delete site
var {
  listSite,
  createSite,
  updateSite,
  showSite,
  deleteSite,
} = require("../controllers/admin/site");

router.get("/site/list", listSite);
router.post("/site/create", createSite);
router.put("/site/update", updateSite);
router.get("/site/show", showSite);
router.delete("/site/delete", deleteSite);

// Role Management
// Admin can list, create, update, show and delete role
var {
  listRole,
  createRole,
  updateRole,
  showRole,
  deleteRole,
} = require("../controllers/admin/user");

router.get("/role/list", listRole);
router.post("/role/create", createRole);
router.put("/role/update", updateRole);
router.get("/role/show", showRole);
router.delete("/role/delete", deleteRole);

// User Management
// Admin can list, show, delete user and update user role
var {
  listUser,
  showUser,
  deleteUser,
  updateUser,
} = require("../controllers/admin/user");

router.get("/user/list", listUser);
router.get("/user/show", showUser);
router.delete("/user/delete", deleteUser);
router.put("/user/update", updateUser);

// Shop Management
// Admin can list, show or delete shop
var { listShop, showShop, deleteShop } = require("../controllers/admin/shop");

router.get("/shop/list", listShop);
router.get("/shop/show", showShop);
router.delete("/shop/delete", deleteShop);

// Product Category Management
// Admin can list, create, update, show or delete product category
var {
  listProductCategory,
  createProductCategory,
  updateProductCategory,
  showProductCategory,
  deleteProductCategory,
} = require("../controllers/admin/product");

router.get("/product/category/list", listProductCategory);
router.post("/product/category/create", createProductCategory);
router.put("/product/category/update", updateProductCategory);
router.get("/product/category/show", showProductCategory);
router.delete("/product/category/delete", deleteProductCategory);

// Product Management
// Admin can list, show or delete product
var {
  listProduct,
  showProduct,
  deleteProduct,
} = require("../controllers/admin/product");

router.get("/product/list", listProduct);
router.get("/product/show", showProduct);
router.delete("/product/delete", deleteProduct);

// Product Review Management
// Admin can list, show or delete product reviews
var {
  listReview,
  showReview,
  deleteReview,
} = require("../controllers/admin/review");

router.get("/product/review/list", listReview);
router.get("/product/review/show", showReview);
router.delete("/product/review/delete", deleteReview);

module.exports = router;
