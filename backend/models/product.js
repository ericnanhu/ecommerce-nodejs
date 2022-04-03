var mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    images: [{ type: String }],
    price: { type: String, required: true },
    description: { type: String },
    categories: [{ type: Schema.Types.ObjectId, ref: "ProductCategory" }],
    shop: { type: Schema.Types.ObjectId, ref: "Shop" },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const productCategorySchema = new Schema(
  {
    name: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

module.exports = {
  productSchema,
  productCategorySchema,
};
