const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPass = async function (pwd) {
  let hashedPass = await bcrypt.hash(pwd, saltRounds);
  return hashedPass;
};

const authUser = async function (pwd, hash) {
  return await bcrypt.compare(pwd, hash);
};

module.exports = { hashPass, authUser };
