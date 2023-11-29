const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require("dotenv").config();

const RegisterModel = require("../model/registerModel");

const registerData = async (req, res) => {
  const { email, password, firstName, lastName, phoneNumber, role } = req.body;
  try {
    const existingUser = await RegisterModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new RegisterModel({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      role,
    });
    await newUser.save();

    res.send(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create register" });
  }
};

const loginData = async (req, res) => {
  const { email, password } = req.body;
  const user = await RegisterModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "Incorrect email or password" });
  }
  try {
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Incorrect email or password" });
    } else {
      const token = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN, {
        expiresIn: "1h",
      });
      res.json({ token });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateEmailAndPassword = async (otp, newEmail, min) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: newEmail,
    subject: "Password Reset OTP",
    text: `Your OTP for password reset is: ${otp} ${min} minutes remaining until OTP expires`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const ForgotData = async (req, res) => {
  const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };
  const { email } = req.body;
  const user = await RegisterModel.findOne({ email });
  try {
    if (!user) {
      return res.status(404).json({ error: "Invalid email Id" });
    } else {
      const otp = generateOTP();
      const otpExpiration = new Date();
      otpExpiration.setMinutes(otpExpiration.getMinutes() + 2);

      user.otp = otp;

      user.otpExpiration = otpExpiration;
      const currentTime = new Date();
      const timeDifference = user.otpExpiration - currentTime;

      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );

      // console.log(
      //   `${minutes} minutes ${seconds} seconds remaining until OTP expires`
      // );

      await user.save();

      await updateEmailAndPassword(otp, user.email, minutes);

      res.json({
        message: "OTP will generate",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const OTPverify = async (req, res) => {
  const { otp } = req.body;
  const user = await RegisterModel.findOne({ otp });
  try {
    if (!user) {
      return res.status(404).json({ error: "OTP is incorrect" });
    } else {
      user.otp = null;
      await user.save();

      res.json({
        message: "OTP verified successfully",
        email: user.email,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "OTP is not valid" });
  }
};

const VerfiyNP = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await RegisterModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    } else {
      // Verify if the user's OTP is already verified (optional step)
      if (!user.otp) {
        return res.status(400).json({ error: "OTP not verified" });
      }

      // Hash the new password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      user.otp = null;
      await user.save();

      res.json({
        message: "Password set successfully",
      });
    }
  } catch (hashingError) {
    console.error(hashingError);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { registerData, loginData, ForgotData, OTPverify, VerfiyNP };
