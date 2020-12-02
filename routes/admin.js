var express = require("express");
var router = express.Router();
const adminController = require("../controllers/adminController.js")
/* GET home page. */
router.get("/", adminController.products);

module.exports = router;
