import React,{useEffect, useState} from 'react'
import './Home.css'
import {db} from "../Firebasefolder/firebase"
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import {v4 as uuidv4} from "uuid"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const cemail = localStorage.getItem("email");
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "product");

    useEffect(() => {
        const getHistory = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id}))) ;          
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
                            <li><a href="/home">Home</a></li>
                            <li><a href="/home/myprofile">MyProfile</a></li>
                            <li><a href="/home/upload">Upload</a></li>
                            <li><a href="/home/orders">Orders</a></li>
                            <li><a href="/">Logout </a></li>
                        </ul>
                    </div>
                </nav>
                <h1>Your Uploaded Products</h1>
                
                <h2>vegetables</h2>
                <div className='wrapper'>
                    {users.map((user) => (
                        (user.email === cemail && user.category === "vegetables") ?
                        <div className='container'>
                        <center><h3>{user.title}</h3>
                        <img src={user.file} style={{width:"180px",height:"130px", borderRadius:"50%"}} />
                        <h3>price : ₹{user.price} /kg</h3>
                        <button onClick={async() => {await deleteDoc(doc(db, "product", user.id)); window.location.reload(); }}>Delete</button></center>
                    </div>
                    : null
                    ))}
                    
                    
                </div>
                <h2>fruits</h2>
                <div className='wrapper'>
                    {users.map((user) => (
                        (user.email === cemail && user.category === "fruits") ?
                        <div className='container'>
                        <center><h3>{user.title}</h3>
                        <img src={user.file} style={{width:"180px",height:"130px", borderRadius:"50%"}} />
                        <h3>price : ₹{user.price} /kg</h3>
                        <button onClick={async() => {await deleteDoc(doc(db, "product", user.id)); window.location.reload(); }}>Delete</button></center>
                    </div>
                    : null
                    ))}
                    
                    
                </div>
                <h2>Grains</h2>
                <div className='wrapper'>
                    {users.map((user) => (
                        (user.email === cemail && user.category === "grains") ?
                        <div className='container'>
                        <center><h3>{user.title}</h3>
                        <img src={user.file} style={{width:"180px",height:"130px", borderRadius:"50%"}} />
                        <h3>price : ₹{user.price} /kg</h3>
                        <button onClick={async() => {await deleteDoc(doc(db, "product", user.id)); window.location.reload(); }}>Delete</button></center>
                    </div>
                    : null
                    ))}
                    
                    
                </div>
            </div></div>
    )
}

export default Home