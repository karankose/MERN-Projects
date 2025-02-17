import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectToDb from './db/db.js';

connectToDb();
import cors from 'cors';
const App = express();

App.use(cors())

App.get('/',(req , res)=>{
    res.send("hello");
});


export default App;