const PdfModel = require("../model/categoryModel.js");
const RegisterModel = require("../model/registerModel.js");

const pdfDatabase = {
  dm: ["pdf1"],
  rn: ["jh"],
  flutter: ["kkk"],
};
const pdfData = async (req, res) => {
  try {
    const newPdf = await PdfModel.create(req.body);
    res.send(newPdf);
  } catch (error) {
    console.error("Error creating PDF:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPdf = async (req, res) => {
  const id = req.params.id;

  try {
    const getPdfData = await RegisterModel.aggregate([
      {
        $match: {
          _id: id,
        },
      },
      {
        $lookup: {
          from: "pdfb2vs",
          localField: "category",
          foreignField: "category",
          as: "pdfData",
        },
      },
      {
        $project: {
          pdf: "$pdfData.pdf",
        },
      },
    ]);
    res.send(getPdfData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { pdfData, getPdf };
