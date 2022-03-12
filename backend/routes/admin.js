var express = require("express");
var router = express.Router();

// Site Management
var {
  listSite,
  createSite,
  updateSite,
  showSite,
  deleteSite,
} = require("../controllers/admin");

router.get("/site/list", listSite);
router.post("/site/create", createSite);
router.put("/site/update", updateSite);
router.get("/site/show", showSite);
router.delete("/site/delete", deleteSite);

// Role Management
var {
  listRole,
  createRole,
  updateRole,
  showRole,
  deleteRole,
} = require("../controllers/admin");

router.get("/role/list", listRole);
router.post("/role/create", createRole);
router.put("/role/update", updateRole);
router.get("/role/show", showRole);
router.delete("/role/delete", deleteRole);

// User Management
var {
  listUser,
  createUser,
  updateUser,
  showUser,
  deleteUser,
} = require("../controllers/admin");

router.get("/user/list", listUser);
router.post("/user/create", createUser);
router.put("/user/update", updateUser);
router.get("/user/show", showUser);
router.delete("/user/delete", deleteUser);

// Product Category Management
var {
  listProductCategory,
  createProductCategory,
  updateProductCategory,
  showProductCategory,
  deleteProductCategory,
} = require("../controllers/admin");

router.get("/category/list", listProductCategory);
router.post("/category/create", createProductCategory);
router.put("/category/update", updateProductCategory);
router.get("/category/show", showProductCategory);
router.delete("/category/delete", deleteProductCategory);

// Product Management
var {
  listProduct,
  createProduct,
  updateProduct,
  showProduct,
  deleteProduct,
} = require("../controllers/admin");

router.get("/product/list", listProduct);
router.post("/product/create", createProduct);
router.put("/product/update", updateProduct);
router.get("/product/show", showProduct);
router.delete("/product/delete", deleteProduct);

module.exports = router;
