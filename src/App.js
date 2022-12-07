import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Orders from "./Components/Orders";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import OrderForm from "./Components/OrderForm";
import Admin from "./Components/Admin";
import UpdateOrder from "./Components/UpdateOrder";


const App =() => {
  // const [login, setlogin]= useState("")
  return(
    <>
      <Navbar />
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/contact' element={<ContactUs/>} />
         <Route path='/admin' element={<Admin/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/signup' element={<Signup/>} />
          <Route path='/admin' element={<Admin/>} />
         <Route path='/orderform' element={<OrderForm />} />
         <Route path='/order' element={<Orders/>} />
         <Route path='/updateorder' element={<UpdateOrder/>} />
       
        
         </Routes>
      <Footer/>
</>

  )}
export default App;