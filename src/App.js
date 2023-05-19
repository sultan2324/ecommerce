import React, { createContext, useContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import User from "./components/Buyer/User"
import Home from "./components/Farmer/Home"
import Fprofile from "./components/Farmer/Myprofile"
import Forders from "./components/Farmer/Orders"
import Fupload from "./components/Farmer/Upload"
import Uprofile from "./components/Buyer/Myprofile"
import Uorders from "./components/Buyer/Orders"
import Uupload from "./components/Buyer/Mycart"
import Payment from "./components/Buyer/Payment"
import Search from "./components/Buyer/Search"
import Cash from "./components/Buyer/Cash"



function App() {


  return (
    <Router>
      
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/user' element={<User />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/myprofile' element={<Fprofile />} />
        <Route path='/home/orders' element={<Forders />} />
        <Route path='/home/upload' element={<Fupload />} />
        <Route path='/user/myprofile' element={<Uprofile />} />
        <Route path='/user/orders' element={<Uorders />} />
        <Route path='/user/mycart' element={<Uupload />} />
        <Route path='/user/payment' element={<Payment />} />
        <Route path='/user/search' element={<Search />} />
        <Route path='/user/cash' element={<Cash />} />
      </Routes>
    </Router>
  );
}

export default App;
