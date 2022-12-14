import logo from "../img/logo.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Navbar() {
    const [authPage, setAuthPage] = useState("login");

    function switchPage() {
        if (authPage == 'login') {
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
                        {authPage == 'login' ? <li className="menu-items"><Link to='/login' className="menu-href" onClick={() => switchPage()}>Login</Link></li> : <li className="menu-items"><Link to='/signup' className="menu-href" onClick={() => switchPage()}>SignUp</Link></li>}                        <li className="menu-items" ><Link to="/about" className="menu-href" >About </Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;