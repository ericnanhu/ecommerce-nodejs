var express = require("express");
var router = express.Router();

var {
  listSite,
  createSite,
  updateSite,
  showSite,
  deleteSite,
//   listUser,
  createUser,
//   updateUser,
//   showUser,
//   deleteUser,
  listProductCategory,
  createProductCategory,
  updateProductCategory,
  showProductCategory,
  deleteProductCategory,
} = require("../controllers/admin");

// Site Management
router.get("/site/list", listSite);
router.post("/site/create", createSite);
router.put("/site/update", updateSite);
router.get("/site/show", showSite);
router.delete("/site/delete", deleteSite);

// User Management
// router.get("/user/list", listUser);
router.post("/user/create", createUser);
// router.put("/user/update", updateUser);
// router.get("/user/show", showUser);
// router.delete("/user/delete", deleteUser);

// Product Category Management
router.get("/category/list", listProductCategory);
router.post("/category/create", createProductCategory);
router.put("/category/update", updateProductCategory);
router.get("/category/show", showProductCategory);
router.delete("/category/delete", deleteProductCategory);

// Product Management

module.exports = router;
