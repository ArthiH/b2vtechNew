const express = require("express");
const router = express.Router();
const {
  registerData,
  loginData,
  ForgotData,
  OTPverify,
  VerfiyNP,
  registergetData
} = require("../controller/registerController");

router.post("/add", registerData);
router.get("/get", registergetData);
router.post("/login", loginData);
router.post("/forgot", ForgotData);
router.post("/verifyotp", OTPverify);
router.post("/verifynp", VerfiyNP);

module.exports = router;
