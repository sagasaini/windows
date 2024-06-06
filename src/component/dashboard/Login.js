import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='login-section'>
      <form class="form">
    <p class="heading">Login</p>
    <input class="input" placeholder="Username" type="text" />
    <input class="input" placeholder="Password" type="text" /> 
    <button class="btn">Submit</button>
</form>
    </div>
  )
}

export default Login
