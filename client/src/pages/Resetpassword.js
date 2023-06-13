import axios from 'axios';
import React, { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast';
import { useParams,useNavigate } from 'react-router-dom';
const Resetpassword = () => {

   const params=useParams();
   const navigate=useNavigate();
   const [inputval,setinputVal]=useState({
      password:""
   })

   const setVal=(e)=>{
        const {name,value}=e.target;
         setinputVal(
            {
               [name]:value
            }
         )
   }
   const [click,setClick]=useState(false);
   const handlesubmit=async(e)=>{
      e.preventDefault();
      try {
         setClick(true);
         const {data}=await axios.post(`/api/v1/auth/reset-password/${params.id}/${params.token}`,inputval);
          console.log(data);
         if(data?.success)
         {
            toast.success("Your password is updated")
             navigate('/login');
         }else{
            toast.error(`${data?.message}`);
         }
         
      } catch (error) {
         console.log(error);
      }
   }
  return (
     <>
        <div className="conatiner p-md-3 bg-black  ">
            <div className="row  d-flex align-content-center justify-content-center  " style={{ height: "94vh", border: "2px solid black" }}>
                <div className="col-md-6 col-xl-4">
                    <div className="card">

                        <form onSubmit={handlesubmit} className='p-1'>
                            <div className=" row d-flex flex-column justify-content-center">
                                <div className=" col d-flex justify-content-center ">
                                   
                                     <h3>create your new password</h3>   
                                    
                                </div>
                            </div>
                                <div className="card-body">
                                <div className=" row ">
                                    <div className="form-group col d-flex flex-column mb-3 justify-content-center" >
                                        <label className="form-label" htmlFor="formControlSm" > <b>Enter Password</b></label>
                                        <input required="true" type="password" id="formControlSm" name="password" value={inputval.password} className="form-control  form-control" onChange={setVal}/>
                                    </div>
                                </div>
                                <div className=" row d-flex justify-content-center ">
                                    <div className="pt-1 col-6 mb-4 d-flex flex-column justify-content-center">
                                        <button disabled={click} className="btn btn-dark btn-lg btn-block" type='submit'> {click?"updating" :"reset password"}</button>
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </>
  )
}

export default Resetpassword
