var mongoose = require("mongoose");
const { Schema } = mongoose;

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

module.exports = {
  roleSchema,
  userSchema,
};
