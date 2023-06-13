import React, { useState } from 'react'
import { getregisterfunc } from '../components/Apicall/apicall'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
const Register = () => {

  const [inputval, setinputVal] = useState({
    fname: "", lname: "", email: "", password: "", phone: "", location: ""
  })
  const navigate = useNavigate();
  // 
  const setVal = (e) => {
    // console.log("you called mister");
    // console.log(inputval);
    const { name, value } = e.target;
    setinputVal(
      {
        ...inputval,
        [name]: value
      })
  }
  const handleSumbit = async (e) => {

    e.preventDefault();
    try {
        const config = {
          "Content-Type": "application/json"
        }
        // console.log(inputval);
        const { data } = await getregisterfunc(inputval, config);
        // console.log(data);
        if (data?.success) {
          toast.success(data.message);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }
        else {
          toast.error(data?.message);
        }
      }
    catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  }
  return (
    <>
      {/* Section: Design Block */}
      <section>
        {/* Jumbotron */}
        <div><Toaster /></div>
        <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)', minHeight: '100vh' }}>
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The best Job <br />
                  <span className="text-primary">for your career</span>
                </h1>
                <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleSumbit} >
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-group">
                            <label className="form-label" htmlFor="fname" >First name</label>
                            <input required="true" type="text" id="fname" name='fname' value={inputval.fname} className="form-control" onChange={setVal} />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="lname">Last name</label>
                            <input required="true" type="text" id="lname" name='lname' value={inputval.lname} className="form-control" onChange={setVal} />
                          </div>
                        </div>
                      </div>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">Email address</label>
                        <input required="true" type="email" id="email" name='email' value={inputval.email} className="form-control" onChange={setVal} />
                      </div>
                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4">Password</label>
                        <input required="true" type="password" id="form3Example4" name='password' value={inputval.password} className="form-control" onChange={setVal} />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="location">Moblie</label>
                        <input required="true" type="text" id="location" name='phone' value={inputval.phone} className="form-control" onChange={setVal} />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="location">Location</label>
                        <input required="true" type="text" id="location" name='location' value={inputval.location} className="form-control" onChange={setVal} />
                      </div>

                      {/* Submit button */}
                      <div className="col-md-md mb-4">
                        <button type="submit" className="btn btn-primary btn-block mb-4">
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Register
