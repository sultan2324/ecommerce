import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export const CartContext = React.createContext();


const root = ReactDOM.createRoot(document.getElementById('root'));
// const [cart,setCart] = useState([]);
let cart = []

// const Cart = useContext(CartContext);


root.render(
  <React.StrictMode>
      <CartContext.Provider value={{cart}}>
        <App />
      </CartContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
