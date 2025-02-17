import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

function connectToDb(){
    mongoose.connect(process.env.DB_CONNET,).then(()=>{
        console.log("db connected");
        
    }).catch((err)=>{
        console.log("Error connecting to the database:", err);

        
    });
    
}
export default connectToDb;