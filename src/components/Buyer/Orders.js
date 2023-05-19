import React from 'react'
import { Link } from 'react-router-dom'
import "./Orders.css"
import grapes from "../images/grapes.png"
import tomato from "../images/download.png"

const Orders = () => {
  return (
    <div className="orders__wrapper">
      <div className="orders__navbar">
        <nav>
          <h1>AgroCulture</h1>

          <div className='nav__list'>
            <ul id="navbar">
              <li><Link to="/user">Home</Link></li>
              <li><Link to="/user/myprofile">MyProfile</Link></li>
              <li><Link to="/user/mycart">MyCart</Link></li>
              <li><Link to="/user/orders">Orders</Link></li>
              <li><Link to="/">Logout </Link></li>
            </ul>
          </div>
        </nav>

      </div>
      <div className='orders_header_container'>
        <h3>Your Orders</h3>
      </div>
      <div className='orders_main_div'>
        <div className='orders_date_container'>
          <h3>Date 10-05-2023</h3>
        </div>
        <div className='orders_container'>

          <div className='card_container'>
            <div className='image_container'>
              <div><img src={tomato} style={{height:"160px", width:"180px"}}></img></div>
            </div> 
            <div className='details_container'>
              <p>Product Name : Tomatoes</p>
              <p>Price : 10Rs/kg</p>
              <p>Quantity : 100kg</p>
              <p>Sub Total : 1000Rs </p>
            </div>
          </div>
          <div className='card_container'>
            <div className='image_container'>
              <div><img src={grapes} style={{height:"160px", width:"180px"}}></img></div>
            </div>
            <div className='details_container'>
              <p>Product Name : Grapes</p>
              <p>Price : 30Rs/Kg</p>
              <p>Quantity : 50Kg</p>
              <p>Sub Total : 1500Rs</p>
            </div>
          </div>

        </div>

        <div className='shipping_addr'>
          <div className='shipping_addrInner'>
            <h3>Total Price : 2500Rs</h3>
            <h3>Shipping Address : 19-4-279/c/271,Tadban,Hyderabad,Telangana</h3>
          </div>
          <div className='payment_method'>
            <h3>Payment method : Cash on Delivery</h3>
            <h3>Delivery Date : 12-05-2023</h3>
          </div>
        </div>
        <button className='cancel_btn'>Cancel</button>
      </div>
    </div>
  )
}

export default Orders