var hash = require("pbkdf2-password")();

const setPass = function (pwd) {
  hash({ password: pwd }, function (err, pass, salt, hash) {
    if (err) throw err;
    // store the salt & hash in the "db"
    users.salt = salt;
    users.hash = hash;
  });
  console.log(users);
};

module.exports = { setPass };
