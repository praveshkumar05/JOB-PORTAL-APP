// common js ( const express =require("express");) is  replced fwith module base approach means import  syntax
//package import
import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
//import morgan from 'morgan'

//file import
import { connectDB } from "./config/db.js"
import testRoutes from "./routes/testRoutes.js"
import authRoutes from './routes/authRoutes.js'
import errorMiddleware from "./middlwares/errorMiddleware.js"
//config dotenv
dotenv.config();

//rest object
const app=express();
app.use(express.json());
app.use(cors());
 //app.use(morgan('dev'));

// routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);


// validation middleware
app.use(errorMiddleware);

//connect databse
connectDB();


// 
const PORT=process.env.PORT||8080
app.listen(PORT,()=>{
    console.log(`port is running in ${process.env.DEV_MODE} mode  on port 8080`);
})