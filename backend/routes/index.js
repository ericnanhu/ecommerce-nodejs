var express = require("express");
var router = express.Router();
var { showHome } = require("../controllers/index");

router.get("/", showHome);

module.exports = router;
