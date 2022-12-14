
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Navbar from "./Components/Navbar";

//pages
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/signup' element={<SignUp />} />

          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
