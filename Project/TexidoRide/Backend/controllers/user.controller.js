import { validationResult } from 'express-validator';
import { createUser } from '../services/user.service.js';
import userModel from '../models/user.model.js';

export const registerUser = async (req, res, next) => {
    // Check for validation errors from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Destructure the fields from req.body
    const { fullname, email, password } = req.body;
    console.log(req.body);

    // Check if fullname contains both firstname and lastname
    if (!fullname || !fullname.firstname || !fullname.lastname) {
        return res.status(400).json({ error: "First name and last name are required." });
    }

    // Hash the password
    const hashPassword = await userModel.hashPassword(password);

    // Call the createUser service to create the user
    try {
        const user = await createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashPassword
        });

        // Generate authentication token
        const token = user.generateAuthToken();

        // Return the token and user details
        res.status(200).json({ token, user });
    } catch (error) {
        next(error);  // Pass any errors to the global error handler
    }
};
