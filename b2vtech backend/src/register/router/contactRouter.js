const express = require("express");
const router = express.Router();
const contactData = require("../controller/contactController");

router.post("/contactdata", contactData);
module.exports = router;
