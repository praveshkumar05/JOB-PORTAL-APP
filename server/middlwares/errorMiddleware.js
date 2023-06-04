// error middleware || Next function
const errorMiddleware=(err,req,res,next)=>{
    
    const defaultError={
        status:400,
        message:err,
    }
    //missing field error

    // if(err.name==="ValidationError")
    // {
    //     defaultError.status=400
    //     defaultError.message= Object.values(err.errors)
    //     .map((item)=>item.message)
    //     .join(",");
    // }
    // if(err.code && err.code==11000){
    //     defaultError.status=400;
    //     defaultError.message=`${Object.keys(
    //         err.keyValue
    //     )} filed should be unique`
    // }
    res.status(defaultError.status).send({message:defaultError.message});
};
export default errorMiddleware