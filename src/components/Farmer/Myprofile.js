import React,{useState, useEffect} from 'react'
import pimg from "../images/profile.PNG"
import "./Myprofile.css"
import {db} from "../Firebasefolder/firebase"
import { collection, getDocs } from 'firebase/firestore'
import {v4 as uuidv4} from "uuid"

const Myprofile = () => {
    const cemail = localStorage.getItem("email");
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

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

            </div>

            { users.map((userdata) => (
                (userdata.email === cemail) ?
                <div className='profile__box'>
                <div className='profile_image'>
                    <img src={pimg} alt=''/>
                    <center><label>{userdata.firstName} {userdata.lastName}</label></center>
                </div>

                <div className='profile_data'>
                    <label>email : {userdata.email}</label><br />
                    <label>Mobile : {userdata.mobile}</label><br />
                    <label>Address : {userdata.address},{userdata.state},{userdata.pincode}</label>
                </div>
                <div className='profile_button'>
                    <button>Change Password</button>
                    <button>Update Profile</button>
                    <button>Logout</button>
                </div>
                
            </div>
            : null
            ))
        }
            </div>
  )
}

export default Myprofile