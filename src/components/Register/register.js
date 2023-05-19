import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
import { auth,db } from '../Firebasefolder/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'
import "./Register.css"

const Register = () => {
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "users");
  const [Newemail, setNewemail] = useState("");
  const [Newpassword, setNewpassword] = useState("");
  const [newmobile, mob] = useState("");
  const [newstate, stat] = useState("");
  const [newaddress, addr] = useState("");
  const [newpincode, pin] = useState("");
  const [firstn, fn] = useState("");
  const [lastn, ln] = useState("");
  const [newcategory, cat] = useState("");

  const handleSubmit = async () => {
    if(!Newemail || Newemail === "" || !Newpassword || Newpassword === ""){
      alert("Both email and password reqired");
      return;
    }
    try{
      const user = await createUserWithEmailAndPassword(
        auth,
        Newemail,
        Newpassword
      );

      await addDoc(usersCollectionRef, {firstName: firstn,lastName: lastn,email: Newemail,mobile: newmobile,
        password: Newpassword,address: newaddress,state: newstate, pincode: newpincode,category: newcategory});
      
      localStorage.setItem("email", Newemail);
      if(newcategory == "farmer"){
        navigate("/home")
      }
      else{
        navigate("/user")
      }
    }catch(error){
      alert(error.message);
    }
  }


  return (
    <div className='register__container'>
      <div className='register_cover'>

        <h1>Register</h1>
        <div className='register_input1'>
          <input type="text" placeholder="First Name" onChange={(event) => {fn(event.target.value); }} required/>
          <input type="text" placeholder="Last Name" onChange={(event) => {ln(event.target.value); }} required/>
        </div>
        <div className='register_input2'>
          <input type="text" placeholder="Mobile No" onChange={(event) => {mob(event.target.value); }} required/>
          <input type="text" placeholder="email" onChange={(event) => {setNewemail(event.target.value); }} required/>
        </div>
        <div className='register_input3'>
          <input type="password" placeholder="Password" onChange={(event) => {setNewpassword(event.target.value); }} required/>
          <input type="password" placeholder="Retype Password" required/>
        </div>
        <div className='register_input4'>
          <input type="text" placeholder="Address" onChange={(event) => {addr(event.target.value); }} required/>
        </div>
        <div className='register_input5'>
          <input type="text" placeholder="State" onChange={(event) => {stat(event.target.value); }} required/>
          <input type="text" placeholder="Pincode" onChange={(event) => {pin(event.target.value); }} required/>
        </div>
        <div className='category'>
          <h3>category : </h3>
          <input type="radio" name="category" id="farmer" value="farmer" onChange={(event) => {cat(event.target.value); }} required/><h3>Farmer</h3>
          <input type="radio" name="category" id="buyer" value="buyer" onChange={(event) => {cat(event.target.value); }} required/><h3>Buyer</h3>
        </div>

        <div className='register-btn'><button onClick={handleSubmit}>Register</button></div>
      </div>
    </div>
  )
}

export default Register