const express = require("express");
const router = express.Router();
const { du } = require("../controller/driverupdatecontroller");
router.route("/").get(du);

module.exports = router;
