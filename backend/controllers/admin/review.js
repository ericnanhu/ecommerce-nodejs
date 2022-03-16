var mongoose = require("mongoose");
var { reviewSchema } = require("../../models/review");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const Review = mongoose.model("Review", reviewSchema);

// Product Review Management
async function listReview(req, res, next) {
  res.json(await Review.find({}).populate("user").populate("product"));
}

async function showReview(req, res, next) {
  res.json(
    await Review.findById(req.query.id).populate("user").populate("product")
  );
}

async function deleteReview(req, res, next) {
  res.json(await Review.findByIdAndDelete(req.query.id));
}

module.exports = {
  listReview,
  showReview,
  deleteReview,
};
