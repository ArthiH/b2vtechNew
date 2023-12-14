const db = require("mongoose");
const { v4 } = require("uuid");

const PdfSchema = new db.Schema({
  _id: {
      type: String,
      default: v4,
    },
  category: {
    type: String,
  },
  pdf: {
    type: String,
  },
});

const PdfModel = db.model("pdfb2v", PdfSchema);

module.exports = PdfModel;
