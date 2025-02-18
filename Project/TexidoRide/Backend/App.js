import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectToDb from './db/db.js';
import UserRoutes from './routes/user.routes.js';

connectToDb();
import cors from 'cors';
const App = express();

App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended : true}))


App.get('/',(req , res)=>{
    res.send("hello");
});
App.use('/user',UserRoutes)


export default App;