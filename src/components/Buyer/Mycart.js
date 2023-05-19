import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../..';
import "./Mycart.css"


const Mycart = () => {
  const navigate = useNavigate();
  const Cart = React.useContext(CartContext);
  const [showPopUp,setShowPopUp] = useState(false)
  const [total,setTotal] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState("");
  const [mycartlength, setmycartlength] = useState(Cart.cart.length);
  
  // const calculateTotal= () => {
  //   Cart.cart.map(item => (
  //     // (item.id!= null) ? total = total + item.price : null
  //     total =+ item.price
  //   ))
  //   console.log(total)
  // }
  const removeFromCart = (itemId) => {
    const newCart = Cart.cart.filter(item => item.id !== itemId);
    Cart.cart = null;
    console.log(Cart.cart);
    Cart.cart = newCart;
    console.log(Cart.cart);
    setmycartlength(Cart.cart.length);
    navigate("/user/mycart")
  };
  const calculateTotal= () => {
    let tot = 0;
    Cart.cart.map(item => {
      if (item.id != null) {
        tot += item.price*item.qty;
        setTotal(tot)
      }
    })
    // console.log(total)
  }
  
  

  const handlePopup = () =>{
    setShowPopUp(!showPopUp)
    calculateTotal()
    
  }

  const handleRoute =() =>{
    if(paymentMethod === "card"){
      navigate("/user/payment")
    }
    else{
      navigate("/user/cash")
    }
  }


  // let totalAmount = 0;
  console.log("Cart data", Cart.cart);
  return (
    <div className="mycart__wrapper">
      <div className="mycart__navbar">
        <nav>
          <h1>AgroCulture</h1>

          <div className='nav__list'>
            <ul id="navbar">
              <li><Link to="/user">Home</Link></li>
              <li><Link to="/user/myprofile">MyProfile</Link></li>
              <li ><Link to="/user/mycart" className='mycart_nav'>Mycart
              </Link></li>
              <li><Link to="/user/orders">Orders</Link></li>
              <li><Link to="/">Logout </Link></li>
            </ul>
          </div>
        </nav>
        
      <div className='cartnumber'>({Cart.cart.length})</div>

      </div>
      
      <div className={showPopUp ? 'popupActive' :'popupHidden'} >
        {/* <h4>Order Total : {total}Rs</h4> */}
        <div className='totalAmount_container'>
          <h3>Total Cart Amount: </h3>
          <h3>   {total} Rs</h3>
        </div>
        <div className='payment_method_container'>
          <h3>Select a Payment Menthod</h3>
        </div>
        <div className='payment_method_container'>
        <input type="radio" name="category" value="cash" onClick={(e) => {setPaymentMethod(e.target.value)}}/><h3>Cash</h3>
        <input type="radio" name="category" value="card" onClick={(e) => {setPaymentMethod(e.target.value)}}/><h3>Card  </h3>
        </div>
        <div className='continue_btn_container'>
        <div  className='checkOut_link'><button className='Checkout_btn' onClick={()=> handleRoute()}>Continue</button></div>

        </div>
      </div>
      <h1>  </h1>
      <div className='mycart__container' onClick={()=> setShowPopUp(false)}>
        {Cart.cart.map(item =>(
          <div className='mycart__data'>
            <center><h3>{item.title}</h3>
              <img src={item.file} style={{ width: "180px", height: "130px", borderRadius:"50%" }} />
              <h3>price : ₹ {item.price}/kg</h3>
              <label>Quantity : </label><input type="number" placeholder={item.qty} className='qty_btn' onChange={(e) => {item.qty = e.target.value }}></input><label>/kg</label>
              <button className='rvm_btn' onClick={() => {removeFromCart(item.id)}}>Remove</button></center>
          </div> 
        ))}
      </div>
      <footer className='checkOut_link'><button className='Checkout_btn' onClick={()=> handlePopup()}>Proceed To CheckOut</button></footer>
    </div>
  )
}

export default Mycart


// onClick={() => {item.id = null; item.price = 0 ; console.log(item); navigate("/user/mycart")}}