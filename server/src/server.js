const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const listen = function () {
  console.log("Server started on PORT: " + PORT);
};

app.listen(PORT, listen);
