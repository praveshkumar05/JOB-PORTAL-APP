import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/notfound.css'
const Notfound = () => {
  return (
    <div className='container-fluid  not-found-container ' >
        <div className="row  not-found-row m-3  text-center  " >
            <div className="offset-sm-3 col-sm-6   p-2  ">
            <Link  to='/' className="btn btn-primary">Go Back</Link>
             <img src="/images/8030430_3828537.jpg" className='img-fluid rounded-5 ' alt="Page Not Found "  />
              
           </div>
         
        </div>
       
    </div>
  )
}

export default Notfound
