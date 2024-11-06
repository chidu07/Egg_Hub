const express = require("express");
const router = express.Router();
const { ud } = require("../controller/updatedrivercontroller");
router.route("/").post(ud);

module.exports = router;
