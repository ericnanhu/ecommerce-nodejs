var express = require("express");
var router = express.Router();
var { showHome, userLogin } = require("../controllers/index");

router.get("/", showHome);

router.post("/login", userLogin);

module.exports = router;
