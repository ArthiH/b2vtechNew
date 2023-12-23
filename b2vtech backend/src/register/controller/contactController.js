const ContactModel = require("../model/contactModel.js");

const contactData = async (req, res) => {
  try {
    const contact = await ContactModel.create(req.body);
    res.send(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "not contact create" });
  }
};

module.exports = contactData;
