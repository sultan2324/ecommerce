import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import { auth } from "../Firebasefolder/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const Login = () => {


  const navigate = useNavigate()

  const [email, setLoginEmail] = useState('')
  const [password, setLoginPassword] = useState('')
  const [newcategory, setcategory] = useState("");

  const handleLogin = async (e) => {
    if (!email || email === "" || !password || password === "") {
      alert("Both email and password is required");
      return;
    }
    e.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      .then(res =>{
        console.log("res",res)
        console.log("res",res.user.uid)
      } )
      localStorage.setItem("email", email);
      if(newcategory == "farmer"){
        navigate("/home")
      }
      else{
        navigate("/user")
      }

    } catch (error) {
      alert("invalid email and password");
    }


  };
  return (

    <div className='login__container'>
      <div className='login_cover'>

        <h1>Login</h1>
        <input type="text" placeholder="email" className='email' onChange={e => setLoginEmail(e.target.value)}/>
        <input type="password" placeholder="password" className='password' onChange={e => setLoginPassword(e.target.value)}/>
        <div className='category'>
          <h3>category : </h3>
          <input type="radio" name="category" id="farmer" value="farmer" onChange={(event) => {setcategory(event.target.value);}}/><h3>Farmer</h3>
          <input type="radio" name="category" id="buyer" value="buyer" onChange={(event) => {setcategory(event.target.value);}}/><h3>Buyer</h3>
        </div>

        <div className='login-btn'><button onClick={handleLogin}>login</button></div>
        <p>New User ?  <Link to={"/register"}><button>Register</button></Link></p>
      </div>
    </div>
  )
}

export default Login