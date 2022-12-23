import logo from "../img/logo.png"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
function Navbar() {
    const [authPage, setAuthPage] = useState("login");

    function switchPage() {
        if (authPage === 'login') {
            setAuthPage('signup');
        } else {
            setAuthPage('login');
        }
    }
    return (
        <>
            <nav id="navbar">
                <div id="logo-container">
                    <div id="logo-img-wrap"><img id="logo-img" src={logo} alt="logo-img" /></div>
                    <div id="companyName-wrap"><a href="/" id="companyName">Customer Realtion Management</a></div>

                </div>
                <div id="header">

                </div>
                <div id="navbar-menu">
                    <ul id="navbar-list">
                        {authPage === 'login' ? <li className="menu-items"><NavLink to='/login' className="menu-href" onClick={() => switchPage()}>Login</NavLink></li> : <li className="menu-items"><NavLink to='/signup' className="menu-href" onClick={() => switchPage()}>SignUp</NavLink></li>}  
                        <li className="menu-items" ><NavLink to="/about" className="menu-href" >About </NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;