var mongoose = require("mongoose");
var { siteSchema } = require("../database");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const Site = mongoose.model("Site", siteSchema);

const showHome = async function (req, res, next) {
  res.json(await Site.find({}));
};

module.exports = { showHome };
