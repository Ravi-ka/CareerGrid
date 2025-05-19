import mongoose from "mongoose";

const RefreshTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserAuth",
    required: true,
  },
  refreshToken: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: "7d" },
});

export const RefreshTokenModel = mongoose.model(
  "RefreshToken",
  RefreshTokenSchema
);
