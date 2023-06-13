import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Forgotpassword = () => {

    const [inputval,setinputVal]=useState({
        email:""
    });
    const [flag,setflag]=useState(false);
    const [click,setClick]=useState(false);
    const setVal = (e) => {
        const { name, value } = e.target;
        setinputVal(
          {
            ...inputval,
            [name]: value
          })
      }
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
                setClick(true);
                const {data}=await axios.post("/api/v1/auth/forget-password",inputval);
                if(data?.success)
                {
                    setflag(true);
                
                }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="conatiner p-md-3 bg-black  ">
            <div className="row  d-flex align-content-center justify-content-center  " style={{ height: "94vh", border: "2px solid black" }}>
                <div className="col-md-6 col-xl-4">
                    <div className="card">

                        <form onSubmit={handlesubmit} className='p-1'>
                            <div className=" row d-flex flex-column justify-content-center">
                                <div className=" col d-flex justify-content-center ">
                                    {
                                        flag?<h5 > <b style={{color:"green"}}> A reset Link  is <br /> sent to your email <br /> please check your email <br />
                                        and click on the given link to reset password </b></h5>:<h5 > <b style={{color:"red"}}>please enter your registered email </b></h5>
                                    }
                                    
                                </div>
                            </div>
                            {
                                flag?""
                                :<div className="card-body">
                                <div className=" row ">
                                    <div className="form-group col d-flex flex-column mb-3 justify-content-center" >
                                        <label className="form-label" htmlFor="formControlSm" > <b>Enter email</b></label>
                                        <input required="true" type="email" id="formControlSm" name="email" value={inputval.email} className="form-control  form-control" onChange={setVal}/>
                                    </div>
                                </div>
                                <div className=" row d-flex justify-content-center ">
                                    <div className="pt-1 col-6 mb-4 d-flex flex-column justify-content-center">
                                        <button disabled={click} className="btn btn-dark btn-lg btn-block" type='submit'> {click?"sending link" :"send link"}</button>
                                    </div>
                                </div>
                            </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgotpassword
