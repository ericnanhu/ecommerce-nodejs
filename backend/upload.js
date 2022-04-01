const multer = require("multer");
const fs = require("fs");

// File name
const fileName = function (req, file, cb) {
  const extArray = file.mimetype.split("/");
  const extension = extArray[extArray.length - 1];
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
};

// Storage
const storageShopLogo = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = process.env.PUBLIC_DIR + `/uploads/shop/${req.query.shopID}/logo`;
    fs.mkdirSync(path, { recursive: true });
    return cb(null, path);
  },
  filename: fileName,
});

const storageProductImage = multer.diskStorage({
  destination: function (req, file, cb) {
    const path =
      process.env.PUBLIC_DIR +
      `/uploads/shop/${req.query.shopID}/product/${req.query.productID}/images`;
    fs.mkdirSync(path, { recursive: true });
    return cb(null, path);
  },
  filename: fileName,
});

const storageUserAvatar = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = process.env.PUBLIC_DIR + `/uploads/user/${req.query.userID}/avatar`;
    fs.mkdirSync(path, { recursive: true });
    return cb(null, path);
  },
  filename: fileName,
});

// Uploads
const uploadShopLogo = multer({ storage: storageShopLogo });
const uploadProductImage = multer({ storage: storageProductImage });
const uploadUserAvatar = multer({ storage: storageUserAvatar });

module.exports = {
  uploadShopLogo,
  uploadProductImage,
  uploadUserAvatar,
};
