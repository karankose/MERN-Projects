

// export default router;
import express from 'express';
import { body } from 'express-validator';
import { registerCaptain ,loginCaptain } from '../controllers/captain.controller.js';

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
], registerCaptain);

router.post('/login',
    [body("email", "Invalid Email").isEmail(),
  body("email", "email is require").notEmpty(),
  body("password", "Invalid password")
    .isLength({ min: 6 })
    .withMessage("password at least 6 character")],
    loginCaptain
)
export default router;
