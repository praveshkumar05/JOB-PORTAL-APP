import { hashPassword } from "../utils/hashPassword.js";
import userModel from "../models/userModel.js";
export const registerController=async(req,res)=>{
    try {
        const {fname,lname,email,phone,password,location}=req.body;
        if(!fname)
        {
            return res.status(400).send({success:false,message:"Please provide the the first name"})
        }
        else if(!email)
        {
            return res.status(400).send({success:false,message:"Please provide the  email"})
        }
        else if(!password)
        {
            return res.status(400).send({success:false,message:"Please provide the password"})
        }
        else if(!phone)
        {
            return res.status(400).send({success:false,message:"Please provide the Phone "})
        }
        const userfind=await userModel.findOne({email});
        if(!userfind){
            const hash=await hashPassword(password);
            const userData=new userModel({fname,lname,email,password:hash,location});
            await userData.save();
            return res.status(201).send({
                message:"You Are Registered",
                success:true,
                userData
            })
        }
        else{
            return res.status(403).send({
                message:"user Already Exist",
                success:false
            })
        }  
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"there is some error in registration",
            error
        })
    }
}