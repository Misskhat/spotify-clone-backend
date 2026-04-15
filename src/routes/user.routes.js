const express = require("express");
const { registration } = require("../controller/user.controller");
const router = express.Router();

router.get("/get", registration);

module.exports = router;
