import mongoose from "mongoose";
import { CustomError } from "../utils/customErrorHandler.js";
import logger from "../utils/logger.js";

export const connectToDatabase = async (next) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    // logger.info("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    logger.error("Error connecting to MongoDB:", error);
    next(new CustomError("Database connection failed", 500));
    process.exit(1);
  }
};
