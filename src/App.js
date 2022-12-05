import React from "react";
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import Order from "./Components/Order";
import Navbar from "./Components/Navbar";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";


const App =() => {
  return(
    <>
      <Navbar />
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/contact' element={<ContactUs/>} />
         <Route path='/admin' element={<Admin/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/order' element={<Order/>} />
         </Routes>
      <Footer/>
</>

  )}
export default App;