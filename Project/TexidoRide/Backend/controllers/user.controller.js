import { validationResult } from "express-validator";
import { createUser } from "../services/user.service.js";
import userModel, {
  comparePassword,
  hashingPassword,
} from "../models/user.model.js";
import BlacklistToken from "../models/blacklistToken.js";

export const registerUser = async (req, res, next) => {
  const errors = validationResult(req); //express-validator
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  console.log(req.body);

  if (!fullname || !fullname.firstname || !fullname.lastname) {
    return res
      .status(400)
      .json({ error: "First name and last name are required." });
  }

  const hashPassword = await hashingPassword(password);

  try {
    const user = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
    });

    const token = user.generateAuthToken();

    res.status(200).json({ token, user });
  } catch (error) {
    next(error); // Pass any errors to the global error handler
  }
};

export const loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");
  console.log(user);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid  password" });
  }

  const token = user.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, user });
  next();
};

export const getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

export const logoutUser = async (req, res, next) => {
  //   res.clearCookies('token');
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await BlacklistToken.create({ token });
  res.status(200).json({ message: "logout " });
};
