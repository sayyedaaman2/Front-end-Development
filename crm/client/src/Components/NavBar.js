import logo from "../img/logo.png";

function Navbar() {
    return (
        <>
            <nav id="navbar">
                <div id="logo-container">
                    <div id="logo-img-wrap"><img id="logo-img" src={logo} /></div>
                    <div id="companyName-wrap"><a href="/" id="companyName">Customer Realtion Management</a></div>

                </div>
                <div id="header">

                </div>
                <div id="navbar-menu">
                    <ul id="navbar-list">
                        <li className="menu-items"><a className="menu-href" href="#">Login</a></li>
                        <li className="menu-items" ><a className="menu-href" href="#">About</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;