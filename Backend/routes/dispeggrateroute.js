const express = require("express");
const router = express.Router();
const { er } = require("../controller/dispeggratecontroller");
router.route("/").get(er);

module.exports = router;
