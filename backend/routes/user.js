var express = require("express");
var router = express.Router();
var {
  userRegister,
  userLogin,
  showUser,
  updateUser,
  changePass,
} = require("../controllers/user");

// Set up upload
const multer = require("multer");
const fs = require("fs");

const storageAvatar = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = __basedir + `/uploads/user/${req.query.id}/avatar`
    fs.mkdirSync(path, { recursive: true })
    return cb(null, path);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

const uploadAvatar = multer({ storage: storageAvatar })

router.post("/register", userRegister);
router.post("/login", userLogin);
router.put("/change-password", changePass);
router.get("/show", showUser);
router.put("/update", uploadAvatar.single('avatar'), updateUser);

module.exports = router;
