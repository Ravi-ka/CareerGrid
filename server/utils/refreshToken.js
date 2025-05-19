import jwt from "jsonwebtoken";

export const GenerateRefreshToken = (user) => {
  try {
    const payload = {
      email: user.email,
      userType: user.userType,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "7d",
    });
  } catch (error) {
    console.log("Error while generating the JWT refresh-token- " + error);
  }
};
