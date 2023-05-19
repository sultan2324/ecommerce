import React, { useEffect, useState } from 'react'
import { db } from "../Firebasefolder/firebase"
import { collection, getDocs } from 'firebase/firestore'
import { CartContext } from '../..'
import { Link } from 'react-router-dom'
import search from "../images/search.PNG"

const User = () => {
    const Cart = React.useContext(CartContext);
    const [cartlength, setCartlength] = useState(Cart.cart.length);
    const addToCart = details => {
        Cart.cart.push(details)
        console.log("Cart data", Cart.cart.length);
        setCartlength(Cart.cart.length);
    };

    const cemail = localStorage.getItem("email");
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "product");

    useEffect(() => {
        const getHistory = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getHistory();
    }, [])


    return (
        <div className="homepage__wrapper">
            <div className="hompage__navbar">
                <nav>
                    <h1>AgroCulture</h1>

                    <div className='nav__list'>
                        <ul id="navbar">
                            <li><Link to="/user/search"><img src={search} style={{width: "70px", height: "55px", marginTop:"12px"}}></img></Link></li>
                            <li><Link to="/user">Home</Link></li>
                            <li><Link to="/user/myprofile">MyProfile</Link></li>
                            <li><Link to="/user/mycart">MyCart</Link></li>
                            <li><Link to="/user/orders">Orders</Link></li>
                            <li><Link to="/">Logout </Link></li>
                        </ul>
                    </div>
                </nav>
                
      <div className='cartnumber'>({cartlength})</div>
                <h1>Products</h1>
                <h2>vegetables</h2>
                <div className='wrapper'>

                    {users.map((user) => (
                        (user.category === "vegetables") ?
                            <div className='container'>
                                <center><h3>{user.title}</h3>
                                    <img src={user.file} style={{ width:"180px",height:"130px", borderRadius:"50%" }} />
                                    <h3>price : ₹{user.price} /kg</h3>
                                    <button onClick={() => { addToCart(user); console.log("added to cart", user) }}>Add to cart</button></center>
                            </div> : null
                    ))}


                </div>
                <h2>Fruits</h2>
                <div className='wrapper'>

                    {users.map((user) => (
                        (user.category === "fruits") ?
                            <div className='container'>
                                <center><h3>{user.title}</h3>
                                    <img src={user.file} style={{width:"180px",height:"130px", borderRadius:"50%"}} />
                                    <h3>price : ₹{user.price} /kg</h3>
                                    <button onClick={() => { addToCart(user) }}>Add to cart</button></center>
                            </div> : null
                    ))}


                </div>
                <h2>Grains</h2>
                <div className='wrapper'>

                    {users.map((user) => (
                        (user.category === "grains") ?
                            <div className='container'>
                                <center><h3>{user.title}</h3>
                                    <img src={user.file} style={{ width:"180px",height:"130px", borderRadius:"50%" }} />
                                    <h3>price : ₹{user.price} /kg</h3>
                                    <button onClick={() => { addToCart(user); console.log("added to cart", user) }}>Add to cart</button></center>
                            </div> : null
                    ))}


                </div>
            </div></div>
    )
}

export default User