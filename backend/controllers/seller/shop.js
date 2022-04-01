var mongoose = require("mongoose");
var { userSchema } = require("../../models/user");
var { shopSchema } = require("../../models/shop");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const User = mongoose.model("User", userSchema);
const Shop = mongoose.model("Shop", shopSchema);

// Create new shop
async function createShop(req, res, next) {
  const newShop = new Shop({
    name: req.body.name,
    user: req.query.userID,
    phone: req.body.phone,
    email: req.body.email,
    description: req.body.description,
    address: {
      country: req.body.country,
      province: req.body.province,
      city: req.body.city,
      postCode: req.body.postCode,
      street: req.body.street,
    },
  });

  newShop.save();

  // If there is a new logo
  if (req.file) {
    const path = /(\/uploads)(.+)/g.exec(req.file.path)[0];
    // console.log(path);
    await Shop.findByIdAndUpdate(newShop._id, { logo: path });
  }

  // Add shop to the user
  await User.findByIdAndUpdate(req.query.userID, { shop: newShop._id });

  res.send("Shop Created!");
}

// Show shop
async function showShop(req, res, next) {
  if (req.query.withProducts == true) {
    res.json(await Shop.findById(req.query.shopID).populate("products"));
  } else {
    res.json(await Shop.findById(req.query.shopID));
  }
}

// Update Shop
async function updateShop(req, res, next) {
  // If there is a new logo
  if (req.file) {
    const path = /(\/uploads)(.+)/g.exec(req.file.path)[0];
    // console.log(path);
    await Shop.findByIdAndUpdate(req.query.shopID, { logo: path });
  }
  const updatedShop = await Shop.findByIdAndUpdate(req.query.shopID, {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    description: req.body.description,
    address: {
      country: req.body.country,
      province: req.body.province,
      city: req.body.city,
      postCode: req.body.postCode,
      street: req.body.street,
    },
  });

  res.send("Shop Updated!");
}

// Delete Shop
async function deleteShop(req, res, next) {
  // Delete Shop
  const deletedShop = await Shop.findByIdAndRemove(req.query.shopID);
  // Update user, remove shop from user
  await User.findByIdAndUpdate(deletedShop.user._id, {
    $unset: { shop: 1 },
  });
  res.json(deletedShop);
}

module.exports = {
  createShop,
  showShop,
  updateShop,
  deleteShop,
};
