const express = require("express");
const router = express.Router();
const EditProfile = require("../controller/editDetail");

router.put("/editdata/:id", EditProfile);
module.exports = router;
