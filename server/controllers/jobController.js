import mongoose from "mongoose";
import jobModel from "../models/jobModel.js";


export const createJobController=async(req,res,next)=>{
    try {
          const {company,position} =req.body;
          if(!company||!position){
            next("each field is required");
          }
          req.body.createdBy=req.user._id;
          const job=await jobModel.create(req.body);
          
          res.status(201).json({
            success:true,
            job
          })
    } catch (error) {
        console.log(error);
        next("there is error in creating job in catch block")
    }
}
export const getAllJobController=async(req,res,next)=>{
    try {
         const jobs=await jobModel.find();
         res.status(200).send({
            success:true,
            totalJobs:jobs.lenght,
            jobs
         })
    }
     catch (error) {
        next(error,"there is some error in getting job controller in catch");  
    }
}
export const updateJobController=async(req,res,next)=>{
    try
    {
            const {id}=req.params;
            const {company,position,workType}=req.body;
            //validatioin
            if(!company||!position){
               return  next("Please Provide All Fields");
            }
            const job=await jobModel.findOne({_id:id});
            if(!job){
               return  next("this job is not found");
            }
            // console.log(job.createdBy.toString());
            // console.log(req.user._id);
            // console.log(typeof(req.user._id));
            // console.log(typeof(job.createdBy));
            if((req.user._id.valueOf()!==job.createdBy.valueOf())){
                return next("You are not authorised for this job");
            }
            const  updateJob=await jobModel.findByIdAndUpdate(id,req.body,{new:true});
            return res.status(201).send({
                  success:true,
                  updateJob
            })
    } catch (error) {
        next(error,"some error occured during updation of project")
        
    }
}
export const deleteJobController=async(req,res,next)=>{
    try {
         const {id}=req.params;

         const job=await jobModel.findOne({_id:id});
         if(!job)
         {
            return next("Nope, there is no jobe like this")
         }
         if(req.user._id.valueOf()===job.createdBy.valueOf()){
            const deleteJob=await jobModel.findByIdAndDelete(id);
            return res.status(201).send({
                success:true })
         }
         else{
            next("sorry you are not authorised to delete this job");
         }
        
    } catch (error) {
        // console.log(error);
        return next("there is some error during deletion of JOB")
        
    }
}

export const filteredJobController=async(req,res,next)=>{
    try {

        const filteredJobs=await jobModel.aggregate( [
            // Stage 1: Filter pizza order documents by pizza size
            {
               $match: { createdBy: new mongoose.Types.ObjectId(req.user._id) }
            },
            // Stage 2: Group remaining documents by pizza name and calculate total quantity
            {
               $group: { _id: "$status", totalQuantity: { $sum:1 } }
            }
         ] )
        //  let defaultStats={
        //     pending:filteredJobs.pending,
        //     reject:filteredJobs.reject
        //  }
       return   res.status(201).send({
            success:true,
            filteredJobs
        })
    } catch (error) {
        console.log(error);
        next("error in getting filtered JOb",error);
        
    }
}