// import userModel  from "../models/user.model.js";


// export const createUser = async({
//     firstname , lastname , email ,password
// })=>{
//     if(!firstname || !lastname || !email || !password){
//         throw new Error('all fields are required');
//     }
//     const user = userModel.create({
//         fullname : {
//             firstname,
//             lastname,
//         },
//         email,
//         password
//     })
//     return user;
// }
// export default createUser;
import userModel from "../models/user.model.js";

export const createUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !lastname || !email || !password) {
        throw new Error("All fields are required");
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password: hashedPassword,
    });

    return user;
};

export default createUser;  // Make sure you're exporting the function correctly
