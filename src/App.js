import React from "react";
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from "./Components/About";
import Admin from "./Components/Admin";


const App =() => {
  return(
    <>
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/admin' element={<Admin/>} />
         </Routes>
     
</>

  )}
export default App;