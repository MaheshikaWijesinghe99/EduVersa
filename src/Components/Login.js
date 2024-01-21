import React from 'react'
import './CSS/Login.css'
import Logo from '../Assests/EduVersa.png'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-col'>    
        <img src={Logo} alt="Logo" className='logo'></img>
        <LoginForm/>    
      </div>

      <div className='login-col col-right'>
        <div className='background-opacity'>
          <p className='right-text'>Your Learning Journey Begins Here</p>
        </div>
      </div>    
    </div>
  )
}

export default Login