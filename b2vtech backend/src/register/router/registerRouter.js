const express = require("express");
const router = express.Router();
const {
  registerData,
  loginData,
  ForgotData,
  OTPverify,
  VerfiyNP,
} = require("../controller/registerController");

router.post("/add", registerData);
router.post("/login", loginData);
router.post("/forgot", ForgotData);
router.post("/verifyotp", OTPverify);
router.post("/verifynp", VerfiyNP);

module.exports = router;
