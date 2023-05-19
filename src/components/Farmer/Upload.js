import React, { useState } from 'react'
import "./Upload.css"
import { storage, db } from '../Firebasefolder/firebase';
import { addDoc, collection } from "firebase/firestore";
import {
    getDownloadURL,
    ref,
    uploadBytesResumable
} from "firebase/storage";
import { useNavigate } from 'react-router-dom'
import { async } from '@firebase/util';

const Upload = () => {
    const navigate = useNavigate();
    const usersCollectionRef = collection(db, "product");
    const [file, setFile] = useState("");
    const [percent,setPercent] = useState(0);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [fileUrl,setFileUrl] = useState("")
    const email = localStorage.getItem("email");

    // Handles input change event and updates state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
    const updateData = async (url) => {
        console.log(url);
        await addDoc(usersCollectionRef, {title: title, price: price, file: url,email: email,category: category,qty: 1});
        navigate("/home");
    }
    function handleUpload() {
        if (!file) {
            alert("Please choose a file first!")
        }

        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    updateData(url);
                    setFileUrl(url)
                });
            }
        );
        
    }
    

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
            <div className='upload__box'>
                <center><h1>Upload Product</h1></center>
                <label>Title : </label><input type="text" placeholder='Title' className='upload_title' onChange={(e) => {setTitle(e.target.value);}}></input><br />
                <label>Image : </label><input type="file" className='upload_title2' onChange={handleChange}></input><br />
                <label>Price : ₹</label><input type="text" placeholder="₹ Price" className='upload_title1' onChange={(e) => {setPrice(e.target.value);}}></input><br />
                <label>category : </label><select className='upload_title2' onChange={(e) => {setCategory(e.target.value);}}>
                    <option value="1">select a category</option>
                    <option value="vegetables" >Vegetables</option>
                    <option value="fruits" >Fruits</option>
                    <option value="grains" >Grains</option>
                </select><br />
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    )
}

export default Upload