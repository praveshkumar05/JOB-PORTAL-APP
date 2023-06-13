import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios';


const Login = () => {
  const [inputval, setinputVal] = useState({
    email: "",
    password: "",
  })
  const navigate=useNavigate();
  const setVal = (e) => {
    const { name, value } = e.target;
    // console.log(inputval);
    setinputVal(
      {
        ...inputval,
        [name]: value
      })
  }

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
       const {email,password}=inputval;
       if(!email||!password){
        toast.error("please fill all the field correctly")
       }
       else{
        const { data } = await axios.post("/api/v1/auth/login",inputval);
        console.log(data);
        if (data?.success) {
          localStorage.setItem("token",data?.token);
          toast.success(`${data.message}`);
          navigate("/dashboard");
        }
        else{
           toast.error(`${data.message}`);
         }
       }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSumbit}>
                      <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Sign Into Your Account</h3>
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" name='email' value={inputval.email} onChange={setVal} className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example17">Email address</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" name='password' value={inputval.password} onChange={setVal} />
                        <label className="form-label" htmlFor="form2Example27">Password</label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block"  type='submit'>Login</button>
                      </div>
                      <Link className="small text-muted" to="/forgetpassword"> <strong> Forgot password?</strong></Link>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="/register" style={{ color: '#393f81' }}><strong>Register here</strong></Link></p>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Login
