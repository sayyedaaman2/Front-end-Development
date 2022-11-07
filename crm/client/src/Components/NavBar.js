import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav id="navbar">
                <div className="navbar-logo">
                    <h1 id="logo">CRM</h1>
                </div>
                <div className="navbar-item">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Register</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar
