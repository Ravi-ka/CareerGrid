import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectToDatabase } from "./config/DbConnection.js";
import logger from "./utils/logger.js";

const app = express();
app.use(express.json());

connectToDatabase();

app.get("/", (req, res) => {
  logger.info("GET request to the root endpoint");
  logger.debug("Request headers:", req.statusHeaders);
  return res.status(200).json({
    message: "Welcome to the server!",
  });
});

app.listen(process.env.PORT || 5001, (err) => {
  if (err) return console.log(err);
  console.log(`Server is running on port ${process.env.PORT}`);
});
