import captainModel, {
  comparePassword,
  hashingPassword,
} from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";

export const registerCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    console.log(error);
    
    return res.status(401).json({ error: error.array() });
  }
  const { fullName, email, password, vehicle } = req.body;

  const hashPassword = await hashingPassword(password);

  try {
    const captain = await createCaptain({
      firstname: fullName.firstName,
      lastname: fullName.lastName,
      email,
      password: hashPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    // token
    const token = captain.generateAuthToken();

    console.log(captain);

    res.status(200).json({ token, captain });
  } catch (error) {
    next(error);
  }
};

// loginCaptain
export const loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");
  console.log(captain);

  if (!captain) {
    return res.status(401).json({ message: "Invalid email " });
  }
  const isMatch = await comparePassword(password, captain.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid  password" });
  }

  const token = captain.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, captain });
  next();
};

export const getCaptainProfile = async (req, res, next) => {
  res.status(200).json(req.captain);
};

export const logoutCaptain = async (req, res, next) => {
    res.clearCookies('token');
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await BlacklistToken.create({ token });
  res.status(200).json({ message: "logout " });
};
