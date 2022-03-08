var mongoose = require("mongoose");
var { siteSchema, userSchema } = require("../database");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const Site = mongoose.model("Site", siteSchema);
const User = mongoose.model("User", userSchema);

// Home
const showHome = async function (req, res, next) {
  res.json(await Site.find({}));
};

// User Auth
var { authUser } = require("../auth");
const userLogin = async function (req, res, next) {
  const user = await User.findOne({ email: req.body.email });
  const match = await authUser(req.body.password, user.password);
  if (match == true) {
    res.send("User Verified!");
  } else {
    res.send("Username or password not correct.");
  }
};

module.exports = { showHome, userLogin };
