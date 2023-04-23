import React from 'react'
import { Link } from 'react-router-dom'
import "./register.css"

const register = () => {
  return (
    <div className='register__container'>
      <div className='register_cover'>

        <h1>Register</h1>
        <div className='register_input1'>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className='register_input2'>
          <input type="text" placeholder="Mobile No" />
          <input type="text" placeholder="email" />
        </div>
        <div className='register_input3'>
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Retype Password" />
        </div>
        <div className='register_input4'>
          <input type="text" placeholder="Address" />
        </div>
        <div className='register_input5'>
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Pincode" />
        </div>
        <div className='category'>
          <h3>category : </h3>
          <input type="radio" name="Farmer" value="Farmer" /><h3>Farmer</h3>
          <input type="radio" name="Buyer" value="Buyer" /><h3>Buyer</h3>
        </div>

        <div className='register-btn'><Link to={"/user"}> <button>Register</button></Link></div>
      </div>
    </div>
  )
}

export default register