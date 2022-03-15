var mongoose = require("mongoose");
var { siteSchema } = require("../../models/site");
mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");
const Site = mongoose.model("Site", siteSchema);

const listSite = async function (req, res, next) {
  res.json(await Site.find({}));
};

const createSite = function (req, res, next) {
  const newSite = new Site(req.body);
  newSite.save();
  res.send(newSite);
};

const updateSite = async function (req, res, next) {
  res.json(await Site.findByIdAndUpdate(req.query.id, req.body, { new: true }));
};

const showSite = async function (req, res, next) {
  res.json(await Site.findById(req.query.id));
};

const deleteSite = async function (req, res, next) {
  res.json(await Site.findByIdAndDelete(req.query.id));
};

module.exports = {
  listSite,
  createSite,
  updateSite,
  showSite,
  deleteSite,
};
