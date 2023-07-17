const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data.js");
const connectDB = require("./config/db.js");

dotenv.config();

connectDB();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("app is running");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

const listen = function () {
  console.log("Server started on PORT: " + PORT);
};

app.listen(PORT, listen);
