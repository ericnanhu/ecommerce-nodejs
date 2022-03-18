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
  });
  newShop.save();

  // Add shop to the user
  await User.findByIdAndUpdate(req.query.userID, { shop: newShop._id });

  res.json(newShop);
}

// Show shop
async function showShop(req, res, next) {
  res.json(await Shop.findById(req.query.shopID).populate("user", "username").populate("products"));
}

// Update Shop
async function updateShop(req, res, next) {
  const updatedShop = await Shop.findByIdAndUpdate(
    req.query.shopID,
    {
      name: req.body.name,
      logo: req.file.path,
      phone: req.body.phone,
      email: req.body.email,
      description: req.body.description,
      link: {
        website: req.body.website,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin,
        pinterest: req.body.pinterest,
      },
      address: {
        country: req.body.country,
        province: req.body.province,
        city: req.body.city,
        postCode: req.body.postCode,
        street: req.body.street,
      },
    },
    {
      new: true,
    }
  );

  res.json(updatedShop);
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
