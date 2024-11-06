const express = require("express");
const router = express.Router();
const { ta } = require("../controller/addeggratecontroller");
router.route("/").post(ta);

module.exports = router;
