import React, { useState } from 'react'
import '../styles/homepage.css'
import { Link } from 'react-router-dom';
import toast,{Toaster} from "react-hot-toast"
const Homepage = () => {

    const [jobs,setJobs]=useState([]);
    const [search,setSearch]=useState("");

    const setVal=(e)=>{
        setSearch(e.target.value);

    }

    const getAlljobs=()=>{
      try {
        
      } catch (error) {
        
        
      }

    }
  return (
    <>

      <div className="container-fluid mycontainer">

       
        <div className="row align-content-center myrow justify-content-between" >


          <div className=" offset-lg-1 col-lg-4 offset-sm-1 col-sm-5 mycol mb-5 ">
            <div className="card mycard  d-flex justify-content-center" >
              <h1 className="text-success" >Get Your Dream <br />
                 Jobs with Jobby</h1>
                  <br />
                  <p> <b style={{color:'dark',backgroundColor:'#FFEEBB',padding:"1px"}}>Find jobs, create trackable resumes and enrich your applications</b></p>
              
                <div className="buttonIN d-flex ">
                 <input type="text" className='form-control myinput' placeholder=' Job title, keywords... ' />
                  <button className='btn btn-success mybtn'>Find Jobs</button>
                </div>
              
            </div>
          </div>
          <div className=" offset-lg-1 col-lg-4 col-sm-6 mycol justify-content-center">
            <div className="card mycard1 container-fluid " >
              <div className="row d-flex justify-content-center">
                <div className="col">
                  <h3 style={{color:'dark'}}> <b>please register/login</b> </h3>
                </div>
              </div>

              <div className="card-body  d-flex justify-content-between ">
                
                  <h4><Link className='btn btn-info ' to="/register">SignIn</Link></h4>
              
             
                  <h4> <Link className='btn btn-info ' to="/login">Log In</Link></h4>
              
              </div>
            </div>

          </div>

        </div>


      </div>
    </>
  )
}

export default Homepage
