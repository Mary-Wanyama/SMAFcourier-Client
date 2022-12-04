import React from "react";
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from "./Components/About";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import Order from "./Components/Order";


const App =() => {
  return(
    <>
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/admin' element={<Admin/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/order' element={<Order/>} />
         </Routes>
     
</>

  )}
export default App;