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
                        <li className='menu-item'>
                            <a href="#">Home</a>
                        </li>
                        <li className='menu-item'>
                            <a href="#">Register</a>
                        </li>
                        <li className='menu-item'>
                            <a href="#">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar
