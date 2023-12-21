const express = require("express");
const router = express.Router();
const { pdfData, getPdf } = require("../controller/pdfController");
router.post("/createpdf", pdfData);
router.get("/getpdf/:id", getPdf);
module.exports = router;