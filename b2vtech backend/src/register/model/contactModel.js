const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
});

const ContactModel = mongoose.model("contactb2v", ContactSchema);

module.exports = ContactModel;
