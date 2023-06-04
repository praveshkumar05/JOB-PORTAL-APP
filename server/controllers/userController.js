import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import { hashPassword, verifyPassword } from "../utils/hashPassword.js";
export const registerController=async(req,res,next)=>{
    try {
        const {fname,lname,email,phone,password,location}=req.body;
        if(!fname)
        {
            next("Please provide the the first name");
        }
        else if(!email)
        {
            next("Please provide the  email");
        }
        else if(!password)
        {
            next("Please provide the password");
        }
        else if(!phone)
        {
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
                user:{
                    fname:userData.fname,
                    lname:userData.lname,
                    email:userData.email,
                    phone:userData.phone,
                    location:userData.location,
                }
             })
        }
        else{
           next("user already exist");
        }  
    } catch (error) {
        console.lor(error);
       next(error);
    }
}
export const loginController=async(req,res,next)=>{
    try {
        const {email,password}=req.body;

        if(!email||!password){
           return next("please provide correct email and password")
        }
        const userExist=await userModel.findOne({email});
        if(!userExist)
        {
           return next(`user with ${email} not exist please register first`)
        }
        const hashedPassword=userExist.password;
        const verify=await verifyPassword(password,hashedPassword);
        if(!verify)
        {
           return next(`either email id or password is Incorrect `);
        }
        else{
            const token=jwt.sign({_id:userExist._id},process.env.JWT_SECRET,{expiresIn:"1d"});
            return res.status(201).send({
            success:true,
            user:{
                fname:userExist.fname,
                lname:userExist.lname,
                email:userExist.email,
                phone:userExist.phone,
                location:userExist.location,
            },
            token
        })

        }
        
        
    } catch (error) {

    return next(error);
    }
}
export const updateuserController=async(req,res,next)=>{
    try { 
       let {fname,lname,email,password,phone,location}=req.body;
        if(!fname||!lname||!email||!password||!phone||!location){
            next("please provide all the details");
        }
        fname= fname?fname:req.user.fname;
        lname= lname?lname:req.user.lname;
        phone= phone?phone:req.user.phone;
        email= email?email:req.user.email;
        location= location?location:req.user.location;
       
        const check=await verifyPassword(password,req.user.password);
        if(!check)
        {
            console.log("password is updating now ;");
            const hashedPassword=await hashPassword(password);
            password=hashedPassword;
        }
        else{
            password=req.user.password;
        }
        const updatedUser=await userModel.findByIdAndUpdate({_id:req.user._id},{fname,lname,phone,location,email,password},{new:true});
        return  res.status(201).send({
            success:true,
            updatedUser
        })   
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}