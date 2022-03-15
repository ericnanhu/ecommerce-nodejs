var mongoose = require("mongoose");
var { userSchema, roleSchema } = require("../models/user");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const User = mongoose.model("User", userSchema);

// User Registration
var { hashPass } = require("../auth");

const userRegister = async function (req, res, next) {
  if ((await User.findOne({ email: req.body.email })) !== null) {
    res.send("There is an existing account associated with this email.");
  } else {
    // Hash password
    const hashedPass = await hashPass(req.body.password);

    // Assign "user" role to the new user
    const userRole = await Role.findOne({ name: "user" });

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      role: userRole._id,
    });

    newUser.save();

    // Add the user to the "user" role
    const updatedRole = await Role.findOneAndUpdate(
      { name: "user" },
      { $push: { users: newUser._id } },
      { new: true }
    );

    res.send({ newUser, updatedRole });
  }
};

// User Login
var { authUser } = require("../auth");
const userLogin = async function (req, res, next) {
  const user = await User.findOne({ email: req.body.email });
  const match = await authUser(req.body.password, user.password);
  if (match == true) {
    res.send("User Verified!");
  } else {
    res.send("Username or password not correct.");
  }
};

// Show user profile
const showUser = async function (req, res, next) {
  res.json(await User.findById(req.query.id));
};

// Update user profile
const updateUser = async function (req, res, next) {
  res.json(await User.findByIdAndUpdate(req.query.id, req.body, { new: true }));
};
module.exports = {
  userRegister,
  userLogin,
  showUser,
  updateUser,
};
