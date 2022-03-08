var mongoose = require("mongoose");
const { Schema } = mongoose;

const siteSchema = new Schema({
  name: { type: String },
  description: { type: String },
  keywords: { type: String },
});

const roleSchema = new Schema({
  name: { type: String },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const userSchema = new Schema(
  {
    name: {
      first: { type: String },
      last: { type: String },
    },
    avatar: { type: String },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    bio: { type: String },
    link: {
      website: { type: String },
      facebook: { type: String },
      twitter: { type: String },
      linkedin: { type: String },
      pinterest: { type: String },
    },
    address: {
      country: { type: String },
      province: { type: String },
      city: { type: String },
      postCode: { type: String },
      street: { type: String },
    },
    role: { type: Schema.Types.ObjectId, ref: "Role" },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    images: [{ type: Schema.Types.ObjectId, ref: "ProductImage" }],
    price: { type: String, required: true },
    description: { type: String },
    categories: [{ type: Schema.Types.ObjectId, ref: "ProductCategory" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const productImageSchema = new Schema(
  {
    image: { type: String },
    product: { type: Schema.Types.ObjectId, ref: "Product" },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

const productCategorySchema = new Schema({
  name: { type: String },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const CommentSchema = new Schema(
  {
    rating: { type: Number, required: true },
    content: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    images: [{ type: Schema.Types.ObjectId, ref: "CommentImage" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const commentImageSchema = new Schema(
  {
    image: { type: String },
    comment: { type: Schema.Types.ObjectId, ref: "Comment" },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

module.exports = {
  siteSchema,
  roleSchema,
  userSchema,
  productSchema,
  productImageSchema,
  productCategorySchema,
  CommentSchema,
  commentImageSchema,
};
