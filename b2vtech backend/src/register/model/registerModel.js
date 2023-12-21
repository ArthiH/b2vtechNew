const db = require("mongoose");
const { v4 } = require("uuid");

const RegisterSchema = new db.Schema({
  _id: {
    type: String,
    default: v4,
  },
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
  category: {
    type: String,
  },
});
const RegisterModel = db.model("registrationb2v", RegisterSchema);

module.exports = RegisterModel;
