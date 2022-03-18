var express = require("express");
var router = express.Router();
var {
  userRegister,
  userLogin,
  showUser,
  updateUser,
  changePass,
} = require("../controllers/user");
var { uploadUserAvatar } = require("../upload");

router.post("/register", userRegister);
router.post("/login", userLogin);
router.put("/change-password", changePass);
router.get("/show", showUser);
router.put("/update", uploadUserAvatar.single("avatar"), updateUser);

module.exports = router;
