import { RefreshTokenModel } from "../models/refreshTokenSchema.js";

export const SaveRefreshToken = async (user, jwtRefreshToken) => {
  try {
    return await RefreshTokenModel.create({
      userId: user._id,
      refreshToken: jwtRefreshToken,
    });
  } catch (error) {
    return console.log("Error while saving refresh token " + error);
  }
};

export const ValidateRefreshToken = async (refreshToken) => {
  try {
    return await RefreshTokenModel.findOne({ refreshToken });
  } catch (error) {
    return console.log(
      "Error while validating the refresh token on DB" + error
    );
  }
};
