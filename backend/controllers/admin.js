var mongoose = require("mongoose");
var {
  siteSchema,
  productCategorySchema,
  userSchema,
  productSchema,
  roleSchema,
} = require("../database");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const Site = mongoose.model("Site", siteSchema);
const Role = mongoose.model("Role", roleSchema);
const User = mongoose.model("User", userSchema);
const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);
const Product = mongoose.model("Product", productSchema);

// Site Management ============================================================
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

// Role Management ==========================================================
const listRole = async function (req, res, next) {
  res.json(await Role.find({}));
};

const createRole = function (req, res, next) {
  const newRole = new Role(req.body);
  newRole.save();
  res.send(newRole);
};

const updateRole = async function (req, res, next) {
  res.json(await Role.findByIdAndUpdate(req.query.id, req.body, { new: true }));
};

const showRole = async function (req, res, next) {
  res.json(await Role.findById(req.query.id));
};

const deleteRole = async function (req, res, next) {
  res.json(await Role.findByIdAndDelete(req.query.id));
};

// User Management ==========================================================
const listUser = async function (req, res, next) {
  res.json(await User.find({}));
};

var { hashPass } = require("../auth");

const createUser = async function (req, res, next) {
  if ((await User.findOne({ email: req.body.email })) !== null) {
    res.send("There is an existing account associated with this email.");
  } else {
    // Hash password
    const hashedPass = await hashPass(req.body.password);

    // Admin can pick user's role when creating a new user
    const userRole = await Role.findOne({ name: req.body.role });

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      role: userRole._id,
    });

    newUser.save();

    // Add the user to the corresponding role
    const updatedRole = await Role.findOneAndUpdate(
      { name: req.body.role },
      { $push: { users: newUser._id } },
      { new: true }
    );

    res.send({ newUser, updatedRole });
  }
};

const updateUser = async function (req, res, next) {
  // Admin can only change user's role

  // Remove the user from the old role
  const oldUser = await User.findById(req.query.id);
  const updatedOldRole = await Role.findByIdAndUpdate(
    oldUser.role,
    { $pull: { users: oldUser._id } },
    { new: true }
  );

  const newRole = await Role.findOne({ name: req.body.role });

  // Update the user model
  const updatedUser = await User.findByIdAndUpdate(
    req.query.id,
    { role: newRole._id },
    { new: true }
  );

  // Add the user to the new role
  const updatedNewRole = await Role.findOneAndUpdate(
    { name: req.body.role },
    { $push: { users: updatedUser._id } },
    { new: true }
  );
  
  res.json({updatedOldRole, updatedNewRole, updatedUser});
};

const showUser = async function (req, res, next) {
  res.json(await User.findById(req.query.id));
};

const deleteUser = async function (req, res, next) {
  res.json(await User.findByIdAndDelete(req.query.id));
};

// Product Category Management ===================================================
const listProductCategory = async function (req, res, next) {
  res.json(await ProductCategory.find({}));
};

const createProductCategory = function (req, res, next) {
  const newProductCategory = new ProductCategory(req.body);
  newProductCategory.save();
  res.send(newProductCategory);
};

const updateProductCategory = async function (req, res, next) {
  res.json(
    await ProductCategory.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
    })
  );
};

const showProductCategory = async function (req, res, next) {
  res.json(await ProductCategory.findById(req.query.id));
};

const deleteProductCategory = async function (req, res, next) {
  res.json(await ProductCategory.findByIdAndDelete(req.query.id));
};

// Product Management =======================================================
const listProduct = async function (req, res, next) {
  res.json(await Product.find({}));
};

const createProduct = function (req, res, next) {
  const newProduct = new Product(req.body);
  newProduct.save();
  res.send(newProduct);
};

const updateProduct = async function (req, res, next) {
  res.json(
    await Product.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
    })
  );
};

const showProduct = async function (req, res, next) {
  res.json(await Product.findById(req.query.id));
};

const deleteProduct = async function (req, res, next) {
  res.json(await Product.findByIdAndDelete(req.query.id));
};

module.exports = {
  listSite,
  createSite,
  updateSite,
  showSite,
  deleteSite,
  listRole,
  createRole,
  updateRole,
  showRole,
  deleteRole,
  listUser,
  createUser,
  updateUser,
  showUser,
  deleteUser,
  listProductCategory,
  createProductCategory,
  updateProductCategory,
  showProductCategory,
  deleteProductCategory,
  listProduct,
  createProduct,
  updateProduct,
  showProduct,
  deleteProduct,
};
