import express from "express";
import {
  RefreshToken,
  UserLogin,
  UserRegistration,
} from "../controllers/userAuthController.js";

export const UserRouter = express.Router();

UserRouter.post("/register", UserRegistration);
UserRouter.post("/login", UserLogin);
UserRouter.post("/refresh-token", RefreshToken);
