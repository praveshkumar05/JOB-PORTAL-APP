import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";

 export const authenticateUser=async(req,res,next)=>{
    try {
        const token=req.headers.authorization;
        const data= await jwt.verify(token,process.env.JWT_SECRET);
        console.log(data,"authnetication in auth middleware");
        const fullData=await userModel.findOne({_id:data._id});
        req.user=fullData;
        // console.log(req.user);
        next();
        
    } catch (error) {
        next("Authentication  Failed")
    }
}