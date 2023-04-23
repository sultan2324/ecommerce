import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

const login = () => {
  return (
    <div className='login__container'>
        <div className='login_cover'>
        
            <h1>Login</h1>
            <input type="text" placeholder="email" className='email' />
            <input type="password" placeholder="password" className='password'/>
            <div className='category'>
                <h3>category : </h3>
                <input type="radio" name="Farmer" value="Farmer" /><h3>Farmer</h3>
                <input type="radio" name="Buyer" value="Buyer"/><h3>Buyer</h3>
            </div>

            <div className='login-btn'><button>login</button></div>
            <p>New User ?  <Link to={"/register"}><button>Register</button></Link></p>
        </div>
    </div>
  )
}

export default login