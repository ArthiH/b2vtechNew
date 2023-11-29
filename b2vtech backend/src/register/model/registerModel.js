const db = require("mongoose");

const RegisterSchema = new db.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  otp: {
    type: String,
  },
});
const RegisterModel = db.model("registrationb2v", RegisterSchema);

module.exports = RegisterModel;
