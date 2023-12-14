import React, { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';

function App() {

  const [popup, setPopup] = useState("close");

  const openPopup = () => {
    // console.log('popup clicked !');
    // console.log(popup);
    if (popup === "close") {
      setPopup("open");
    }
    else {
      setPopup("close");
    }
  }


  return (
    <BrowserRouter>
      <Navbar setPopup={openPopup} />
      {/* <Products /> */}
      <Routes >
        <Route path='login' exact element={<Login loginPopup={popup} setPopup={openPopup} />} ></Route>
        <Route path='login/dashboard' exact element={<Dashboard />} ></Route>
        <Route path='services/products' element={<Products />} ></Route>
        <Route path='/' exact element={<Homepage sectionRef={'homeSectionRef'} />} ></Route>
        <Route path='/services' exact element={<Homepage sectionRef={'servicesSectionRef'} />} ></Route>
        <Route path='/plans' exact element={<Homepage sectionRef={'plansSectionRef'} />} ></Route>
        <Route path='/contacts' exact element={<Homepage sectionRef={'contactsSectionRef'} />} ></Route>
      </Routes>

      {/* <Navbar setPopup={openPopup} />
      <Login loginPopup={popup} setPopup={openPopup} />
      <Dashboard />
      <Homepage /> */}
    </BrowserRouter>




  );
}

export default App;
