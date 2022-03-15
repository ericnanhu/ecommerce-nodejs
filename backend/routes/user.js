var express = require("express");
var router = express.Router();
var {
  userRegister,
  userLogin,
  showUser,
  updateUser,
} = require("../controllers/user");

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/", showUser);
router.post("/update", updateUser);

module.exports = router;
