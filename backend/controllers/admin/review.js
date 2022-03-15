var mongoose = require("mongoose");
var { reviewSchema, reviewImageSchema } = require("../../models/review");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const Review = mongoose.model("Review", reviewSchema);
const ReviewImage = mongoose.model("ReviewImage", reviewImageSchema);

// Product Review Management
const listReview = async function (req, res, next) {
  res.json(await Review.find({}).populate("user").populate("product"));
};

const showReview = async function (req, res, next) {
  res.json(
    await Review.findById(req.query.id)
      .populate("user")
      .populate("product")
      .populate("images")
  );
};

const deleteReview = async function (req, res, next) {
  res.json(await Review.findByIdAndDelete(req.query.id));
};

// Product Review Image Management
const listReviewImage = async function (req, res, next) {
  res.json(await ReviewImage.find({}).populate("review"));
};

const showReviewImage = async function (req, res, next) {
  res.json(await ReviewImage.findById(req.query.id).populate("review"));
};

const deleteReviewImage = async function (req, res, next) {
  res.json(await ReviewImage.findByIdAndDelete(req.query.id));
};

module.exports = {
  listReview,
  showReview,
  deleteReview,
  listReviewImage,
  showReviewImage,
  deleteReviewImage,
};
