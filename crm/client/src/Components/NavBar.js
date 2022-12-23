import logo from "../img/logo.png"
import { NavLink } from 'react-router-dom'
function Navbar() {

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
                        <li className="menu-items"><NavLink to='/signup' className="menu-href" >SignUp</NavLink></li>
                        <li className="menu-items"><NavLink to='/login' className="menu-href" >Login</NavLink></li>
                        <li className="menu-items" ><NavLink to="/about" className="menu-href" >About </NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;