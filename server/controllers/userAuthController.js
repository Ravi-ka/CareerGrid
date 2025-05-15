import bcrypt from "bcrypt";
import logger from "../utils/logger.js";
import {
  CreateNewUserService,
  ValidateExistingEmailAddress,
} from "../services/UserAuthService.js";
import { GenerateJwtToken } from "../utils/jwtTokenGeneration.js";

export const UserRegistration = async (req, res) => {
  try {
    logger.info(`Incoming request to ${req.originalUrl}`);
    const { userType, email, password, firstName, lastName, phone } = req.body;
    if (!userType || !email || !password || !firstName || !lastName || !phone) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }
    const validateEmail = await ValidateExistingEmailAddress(email);
    if (validateEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const newUserData = {
      userType,
      email,
      passwordHash,
      firstName,
      lastName,
      phone,
    };
    const createUser = await CreateNewUserService(newUserData);
    if (!createUser)
      res
        .status(500)
        .json({ message: "Controller error while creating a new user" });
    return res.status(201).json({
      status: "success",
      message: "User Created Successfully",
      data: createUser,
    });
  } catch (error) {
    return console.log("Controller error while creating a new user");
  }
};

export const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }
    const validateEmail = await ValidateExistingEmailAddress(email);
    if (!validateEmail)
      return res.json({
        message: `This email address(${email}) is not registered`,
      });
    const validatePassword = await bcrypt.compare(
      password,
      validateEmail.passwordHash
    );
    if (!validatePassword)
      return res
        .status(401)
        .json({ status: "failed", message: "Invalid Username or Password" });
    const jwtToken = await GenerateJwtToken(validateEmail);
    return res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      token: jwtToken,
    });
  } catch (error) {
    return console.log("Error while logging in the user - " + error);
  }
};

// ! Add logger and errorHandler
