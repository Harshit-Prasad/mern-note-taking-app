import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import noteRoutes from "./routes/note.route.js";
import { notFound, errorHandler } from "./middlewares/error.middleware.js";

config();

connectDB();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/note", noteRoutes);

// DEPLOYMENT

// const __dirname__ = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname__, "..", "client", "dist")));

//   app.get("*", (_, res) =>
//     res.sendFile(
//       path.resolve(__dirname__, "..", "client", "dist", "index.html")
//     )
//   );
// } else {
//   app.get("/", (_, res) => {
//     res.send("API is running..");
//   });
// }

// DEPLOYMENT

app.use(notFound);
app.use(errorHandler);

const start = function () {
  console.log("Server started on PORT: " + PORT);
};

app.listen(PORT, start);
