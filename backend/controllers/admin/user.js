var mongoose = require("mongoose");
var { userSchema, roleSchema } = require("../../models/user");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const Role = mongoose.model("Role", roleSchema);
const User = mongoose.model("User", userSchema);

// Role Management ==========================================================
async function listRole(req, res, next) {
  res.json(await Role.find({}));
}

async function createRole(req, res, next) {
  const newRole = new Role(req.body);
  newRole.save();
  res.send(newRole);
}

async function updateRole(req, res, next) {
  res.json(await Role.findByIdAndUpdate(req.query.id, req.body, { new: true }));
}

async function showRole(req, res, next) {
  res.json(await Role.findById(req.query.id).populate("users"));
}

async function deleteRole(req, res, next) {
  res.json(await Role.findByIdAndDelete(req.query.id));
}

// User Management ==========================================================
async function listUser(req, res, next) {
  res.json(await User.find({}).populate("shop").populate("role", "name"));
}

// var { hashPass } = require("../../auth");

// const createUser = async function (req, res, next) {
//   if ((await User.findOne({ email: req.body.email })) !== null) {
//     res.send("There is an existing account associated with this email.");
//   } else {
//     // Hash password
//     const hashedPass = await hashPass(req.body.password);

//     // Admin can pick user's role when creating a new user
//     const userRole = await Role.findOne({ name: req.body.role });

//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hashedPass,
//       role: userRole._id,
//     });

//     newUser.save();

//     // Add the user to the corresponding role
//     const updatedRole = await Role.findOneAndUpdate(
//       { name: req.body.role },
//       { $push: { users: newUser._id } },
//       { new: true }
//     );

//     res.send({ newUser, updatedRole });
//   }
// };

async function updateUser(req, res, next) {
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

  res.json(updatedUser);
}

async function showUser(req, res, next) {
  res.json(
    await User.findById(req.query.userID).populate("shop").populate("role", "name")
  );
}

async function deleteUser(req, res, next) {
  res.json(await User.findByIdAndDelete(req.query.userID));
}

module.exports = {
  listRole,
  createRole,
  updateRole,
  showRole,
  deleteRole,
  listUser,
  // createUser,
  updateUser,
  showUser,
  deleteUser,
};
