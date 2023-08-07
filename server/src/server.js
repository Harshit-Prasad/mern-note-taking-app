import express, { json } from "express";
import { config } from "dotenv";
import notes from "./data.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import noteRoutes from "./routes/note.route.js";
import { notFound, errorHandler } from "./middlewares/error.middleware.js";

config();

connectDB();
const app = express();
const PORT = process.env.PORT;

app.use(json());

app.get("/", (req, res) => {
  res.send("app is running");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.use("/api/user", userRoutes);
app.use("/api/note", noteRoutes);

app.use(notFound);
app.use(errorHandler);

const listen = function () {
  console.log("Server started on PORT: " + PORT);
};

app.listen(PORT, listen);
