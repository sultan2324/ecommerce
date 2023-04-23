import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/login"
import Register from "./components/Register/register"
import User from "./components/Buyer/user"



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/user' element={<User />} />

      </Routes>
    </Router>
  );
}

export default App;
