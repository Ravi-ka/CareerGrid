import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectToDatabase } from "./config/DbConnection.js";
import { UserRouter } from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

connectToDatabase();

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to the server!",
  });
});

// # User Routes
app.use("/api/auth", UserRouter);

app.listen(process.env.PORT || 5001, (err) => {
  if (err) return console.log(err);
  console.log(`Server is running on port ${process.env.PORT}`);
});
