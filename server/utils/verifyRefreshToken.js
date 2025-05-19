import jwt from "jsonwebtoken";

export const VerifyRefreshToken = (refreshToken) => {
  return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
};
