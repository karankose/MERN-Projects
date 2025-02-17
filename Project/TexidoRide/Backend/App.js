import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
const App = express();

App.use(cors())

App.get('/',(req , res)=>{
    res.send("hello");
});


export default App;