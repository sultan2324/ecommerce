import React, { useEffect, useState } from 'react'
import { db } from "../Firebasefolder/firebase"
import { collection, getDocs } from 'firebase/firestore'
import { CartContext } from '../..'
import { Link } from 'react-router-dom'
import "./stylesheet.css"

const Search = () => {
    const Cart = React.useContext(CartContext)
    const [key, setKey] = useState("");
    const addToCart = details => {
        console.log("funn", details);
        // setCart(details);
        Cart.cart.push(details)
        console.log("Cart data", Cart.cart);
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
                            <li><Link to="/user">Home</Link></li>
                            <li><Link to="/user/myprofile">MyProfile</Link></li>
                            <li><Link to="/user/mycart">MyCart</Link></li>
                            <li><Link to="/user/orders">Orders</Link></li>
                            <li><Link to="/">Logout </Link></li>
                        </ul>
                    </div>
                </nav>

            </div>
            <div className='search_input'>
                <input type="text" placeholder='Search' onChange={(e) => {setKey(e.target.value)}}></input>
            </div>

            <h1>Search Result...</h1>
            <div className='wrapper'>
                {users.map((user) => (
                    (user.title.toLowerCase().includes(key.toLowerCase()) && key != "") ?
                        <div className='container'>
                            <center><h3>{user.title}</h3>
                                <img src={user.file} style={{ width:"180px",height:"130px", borderRadius:"50%" }} />
                                <h3>price : ₹{user.price} /kg</h3>
                                <button onClick={() => { addToCart(user); console.log("added to cart", user) }}>Add to cart</button></center>
                        </div> : null
                ))}


            </div>

        </div>
    )
}

export default Search
