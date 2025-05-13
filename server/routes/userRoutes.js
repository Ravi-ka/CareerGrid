import express from "express";
import { UserRegistration } from "../controllers/userAuthController.js";

export const UserRouter = express.Router();

UserRouter.post("/register", UserRegistration);
