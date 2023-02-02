import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar() {
  const [menuBtn, setMenuBtn] = useState(false);

  useEffect(()=>{

  },[menuBtn])
  return (
    <>
      <nav className="w-screen bg-blue-100">
        <div className="flex space-around px-2">
          <div className=" flex items-center">
            <img className="mobile:w-12" src={logo} alt="logo-img" />
          </div>
          <div className="flex items-center justify-center w-full">
            <NavLink
              to="/"
              className="mobile:text-sm iPad:text:sm laptop:text-lg p-2"
            >
              Customer Realtion Management
            </NavLink>
          </div>
          <div className="m-auto " onClick={() => setMenuBtn(!menuBtn)}>
            {menuBtn ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="46" width="38">
                <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="46" width="38">
                <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
              </svg>
            )}
          </div>
        </div>
        <div className="menu">
          <ul className="">
            <li className="menu-items hover:shadow-none hover:bg-slate-50">
              <NavLink to="/signup" className="menu-href">
                SignUp
              </NavLink>
            </li>
            <li className="menu-items">
              <NavLink to="/login" className="menu-href">
                Login
              </NavLink>
            </li>
            <li className="menu-items">
              <NavLink to="/about" className="menu-href">
                About{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
