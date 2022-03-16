var mongoose = require("mongoose");
var { siteSchema } = require("../../models/site");
mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");
const Site = mongoose.model("Site", siteSchema);

async function listSite(req, res, next) {
  res.json(await Site.find({}));
}

async function createSite(req, res, next) {
  const newSite = new Site(req.body);
  newSite.save();
  res.send(newSite);
}

async function updateSite(req, res, next) {
  res.json(await Site.findByIdAndUpdate(req.query.id, req.body, { new: true }));
}

async function showSite(req, res, next) {
  res.json(await Site.findById(req.query.id));
}

async function deleteSite(req, res, next) {
  res.json(await Site.findByIdAndDelete(req.query.id));
}

module.exports = {
  listSite,
  createSite,
  updateSite,
  showSite,
  deleteSite,
};
