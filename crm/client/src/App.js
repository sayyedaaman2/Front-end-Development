
import './App.css';
import React  from "react";


import Navbar from "./Components/Navbar"
import SignUp from './Components/SignUp';
import SignUpEng from './Components/SignUpEng';
import Login from './Components/Login'

function App() {
  return (
    <>
      <Navbar/>
      {/* <SignUp/> */}
      {/* <SignUpEng/> */}
      <Login/>
    </>
  );
}

export default App;
