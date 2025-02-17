import express from 'express';
const router = express.Router();
import { body } from "express-validator";
import {registerUser} from '../controllers/user.controller.js'

router.post('/register',
    body('email','Invalid Email').isEmail(),
    body('email','Email id is required').notEmpty(),
    body('fullname.firstname').isLength({ min : 3}).withMessage('name must be more than 3 letters'),
    body('password').isLength({min : 6}).withMessage('password size more than 6'),

registerUser)



export default router;