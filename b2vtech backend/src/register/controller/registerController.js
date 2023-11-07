const RegisterModel = require("../model/registerModel");

const registerData = async (req, res) => {
  console.log("hello");
  const register = new RegisterModel(req.body);
  try {
    await register.save();
    res.send(register);
  } catch (error) {
    res.status(500).json({ error: "Failed to create register" });
  }
};

const loginData = async (req, res) => {
  const { email, password } = req.body;
  const checkEmail = await RegisterModel.findOne({ email });
  const checkPassword = await RegisterModel.findOne({ password });
  if (!checkEmail || !checkPassword) {
    res.send("incorrect");
  } else {
    res.send(checkEmail);
  }
};

module.exports = { registerData, loginData };
