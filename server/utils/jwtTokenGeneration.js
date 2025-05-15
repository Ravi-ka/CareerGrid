import jwt from "jsonwebtoken";

export const GenerateJwtToken = async (user) => {
  try {
    const payload = {
      email: user.email,
      userType: user.userType,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    console.log("Error while generating the JWT token- " + error);
  }
};
