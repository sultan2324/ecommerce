import React from 'react'
import "./Homepage.css"
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="homepage__wrapper">
      <div className="hompage__navbar">
        <nav>
          <h1>AgroCulture</h1>

          <div className='nav__list'>
            <ul id="navbar">
              <li><a href="./">Home</a></li>
              <li><a href="./login">MyCart</a></li>
              <li><a href="./login">Login</a></li>
              <li><a href="./">About Us</a></li>
              <li><a href="./">Contact </a></li>
            </ul>
          </div>
        </nav>

      </div>

      <div className='action__section'>
        <div className='data__section'>
          <h1>Agroculture</h1>
          <p>Your Product Our Market</p>
          <div className='button__section'>
            <Link to={"/login"}>
            <button>Login</button>
            </Link>
            <Link to={"/register"}>
            <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='homepage__intro'>
        <h1>About Us</h1>
        <h3>AgroCulture</h3>
        <p>Agroculture is an e-commerce website to Explore the new way of trading.....</p>
        <div className='contact__details'>

        </div>
      </div>
    </div>
  )
}

export default Homepage