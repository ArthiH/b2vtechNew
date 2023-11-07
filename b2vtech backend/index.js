const express = require("express");
const app = express();
const db = require("./src/db/db");
const cors = require("cors");
const registerRouter = require("./src/register/router/registerRouter");

// middleware
app.use(cors());
app.use(express.json());
app.use("/user", registerRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
