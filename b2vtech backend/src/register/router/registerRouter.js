const express = require("express");
const router = express.Router();
const { registerData, loginData } = require("../controller/registerController");

router.post("/add", registerData);
router.post("/login", loginData);

module.exports = router;
