var mongoose = require("mongoose");
var { reviewSchema, reviewImageSchema } = require("../../models/review");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const Review = mongoose.model("Review", reviewSchema);
const ReviewImage = mongoose.model("ReviewImage", reviewImageSchema);

// Product Review Management
async function listReview(req, res, next) {
  res.json(await Review.find({}).populate("user").populate("product"));
}

async function showReview(req, res, next) {
  res.json(
    await Review.findById(req.query.id)
      .populate("user")
      .populate("product")
      .populate("images")
  );
}

async function deleteReview(req, res, next) {
  res.json(await Review.findByIdAndDelete(req.query.id));
}

// Product Review Image Management
async function listReviewImage(req, res, next) {
  res.json(await ReviewImage.find({}).populate("review"));
}

async function showReviewImage(req, res, next) {
  res.json(await ReviewImage.findById(req.query.id).populate("review"));
}

async function deleteReviewImage(req, res, next) {
  res.json(await ReviewImage.findByIdAndDelete(req.query.id));
}

module.exports = {
  listReview,
  showReview,
  deleteReview,
  listReviewImage,
  showReviewImage,
  deleteReviewImage,
};
