var mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    rating: { type: Number, required: true },
    content: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    images: [{ type: Schema.Types.ObjectId, ref: "ReviewImage" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const reviewImageSchema = new Schema(
  {
    image: { type: String },
    review: { type: Schema.Types.ObjectId, ref: "Review" },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

module.exports = {
  reviewSchema,
  reviewImageSchema,
};
