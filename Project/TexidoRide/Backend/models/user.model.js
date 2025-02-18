// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// const userSchema =new mongoose.Schema({
//     fullname:{
//         firstname: {type : String,
//                     required : true,
//                     minlength: [3,'first name must be at least 3 characters '],
//         },
//         lastname:{type : String,
//                   required : true,
//                   minlength: [3 ,'last name must be at least 3 charcters'],
//         },
//         email:{
//             type : String,
//             required : true,
//             unique : true,
//             minlength : [5,'email must be at least 5 charcters']
//         },
//         password:{
//             type : String,
//             required: true,  
//             select :false 
//         },
//         socketId:{
//             type:String,
//         }
//     }
// })

// userSchema.methods.generateAuthToken= function(){
//     const token = jwt.sign({ _id: this.id}, process.env.JWT_SECRET);
//     return token;
// }

// userSchema.methods.comparePassword = async function(password){
//    return await bcrypt.compare(password,this.password); 
// }

// userSchema.statics
// .hashPassword = async function (password) {
//    return await bcrypt.hash(password , 10);
// }

//  const userModel = mongoose.model('user', userSchema);

//  export default userModel;


import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters'],
        },
        lastname: {
            type: String,
            required: true,
            minlength: [3, 'Last name must be at least 3 characters'],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters'],
    },
    password: {
        type: String,
        required: true,
        select: false, 
    },
    socketId: {
        type: String,
    },
});

// Generate JWT token
userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this.id }, process.env.JWT_SECRET);
};

// Compare password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Hash password - FIXED
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model('User', userSchema);
export default userModel;
