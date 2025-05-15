import { UserAuthModel } from "../models/userSchema.js";

export const ValidateExistingEmailAddress = async (email) => {
  try {
    const data = await UserAuthModel.findOne({ email });
    return data;
  } catch (error) {
    return console.log(
      "Error occurred while validating the Email address from DB - " + error
    );
  }
};

export const CreateNewUserService = async (newUserData) => {
  try {
    return await UserAuthModel.create(newUserData);
  } catch (error) {
    return console.log(
      "Error occurred while creating a new User to DB - " + error
    );
  }
};

// ! Add logger and errorHandler
