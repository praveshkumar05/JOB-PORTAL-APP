import mongoose from "mongoose";
import validator from "validator";
const userSchema= new mongoose.Schema({  

    fname:{
        type:String,
        required:[true,'Name is require']
    },
    lname:{
        type:String
    },

    email:{
        type:String,
        required:[true,'Email is require'],
        unique:true,
        validate:validator.isEmail
    },
    phone:{
        type:Number,
        required:[true,'Phone is require'],
    },
    password:{
        type:String,
        required:[true,'Email is require']    
    },
   location:{
        type:String,
        default:"India"
    }
},{timestamps:true});

export default  new mongoose.model("User",userSchema);
