const express = require("express");
const app = express();
const db = require("./src/db/db");
const cors = require("cors");
const registerRouter = require("./src/register/router/registerRouter");
const pdfRouter=require("./src/register/router/pdfRouter")
const editRouter=require("./src/register/router/editRouter")
const contactRouter = require("./src/register/router/contactRouter");
// middleware
app.use(cors());
app.use(express.json());
app.use("/user", registerRouter);
app.use("/pdf", pdfRouter);
app.use("/edit", editRouter);
app.use("/contact", contactRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
