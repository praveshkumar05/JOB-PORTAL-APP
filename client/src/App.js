import React from 'react'
import Homepage from './pages/Homepage'
import {Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Notfound from './pages/Notfound'
import 'bootstrap/dist/css/bootstrap.css';
import Forgotpassword from './pages/Forgotpassword'
import Resetpassword from './pages/Resetpassword'

const App = () => {
  return (
    <> 
      <Routes>
          <Route  path='/' element={<Homepage/>} />
          <Route  path='/register' element={<Register/>} />
          <Route  path='/login' element={<Login/>} />
          <Route  path='/dashboard' element={<Dashboard/>} />
          <Route  path='/forgetpassword' element={<Forgotpassword/>} />
          <Route path='/resetpassword/:id/:token' element={<Resetpassword/>}/>
          <Route  path="*" element={<Notfound/>} />

      </Routes>
         
    </>
  )
}

export default App
