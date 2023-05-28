import { hashPassword } from "../utils/hashPassword.js";
import userModel from "../models/userModel.js";
export const registerController=async(req,res,next)=>{
    try {
        const {fname,lname,email,phone,password,location}=req.body;
        if(!fname)
        {
            // return res.status(400).send({success:false,message:"Please provide the the first name"})
            next("Please provide the the first name");
        }
        else if(!email)
        {
            // return res.status(400).send({success:false,message:"Please provide the  email"})
            next("Please provide the  email");
        }
        else if(!password)
        {
            // return res.status(400).send({success:false,message:"Please provide the password"})
            next("Please provide the password");
        }
        else if(!phone)
        {
            // return res.status(400).send({success:false,message:"Please provide the Phone "})
            next("Please provide the Phone ");
        }
        const userfind=await userModel.findOne({email});
        if(!userfind){
            const hash=await hashPassword(password);
            const userData=new userModel({fname,lname,email,password:hash,location,phone});
            await userData.save();
            return res.status(201).send({
                message:"You Are Registered",
                success:true,
                userData
             })
        }
        else{
           next("user already exist");
        }  
    } catch (error) {
       next(error);
    }
}