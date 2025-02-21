import express from "express";
import { body } from "express-validator";
import {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser
} from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js"; //

const router = express.Router();

router.post(
  "/register",
  // Express-validator middlewares for validation
  body("email", "Invalid Email").isEmail(),
  body("email", "Email id is required").notEmpty(),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters"),
  body("fullname.lastname")
    .isLength({ min: 3 })
    .withMessage("Last name must be at least 3 characters"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  // Controller function to handle registration logic
  registerUser
);

router.post(
  "/login",
  body("email", "Invalid Email").isEmail(),
  body("email", "email is require").notEmpty(),
  body("password", "Invalid password")
    .isLength({ min: 6 })
    .withMessage("password at least 6 character"),
  loginUser
);

router.get("/profile", authUser, getUserProfile);

router.get('/logout',authUser,logoutUser)

export default router;
