var express = require("express");
var router = express.Router();
var { createShop, showShop, updateShop, deleteShop } = require("../controllers/shop");

// Set up upload
const multer = require("multer");
const fs = require("fs");

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

router.post("/create", createShop);
router.get("/show", showShop);
router.put("/update", uploadShopLogo.single("logo"), updateShop);
router.delete("/delete", deleteShop);

module.exports = router;
