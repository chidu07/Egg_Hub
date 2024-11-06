const express = require("express");
const router = express.Router();
const { adriver } = require("../controller/getdrivercontroller");
router.route("/").get(adriver);

module.exports = router;
