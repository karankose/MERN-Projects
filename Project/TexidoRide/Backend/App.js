import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectToDb from './db/db.js';
import UserRoutes from './routes/user.routes.js';
import captainRoutes from './routes/captain.routes.js';
import mapsRoutes from './routes/maps.routes.js'
import rideRoutes from './routes/ride.routes.js'
import cookieParser from 'cookie-parser';

connectToDb();
import cors from 'cors';
const App = express();

App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended : true}))
App.use(cookieParser());


App.get('/',(req , res)=>{
    res.send("hello");
});
App.use('/user',UserRoutes);
App.use('/captain',captainRoutes);
App.use('/maps',mapsRoutes)
App.use('/ride',rideRoutes)


export default App;