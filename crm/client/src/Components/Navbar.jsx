import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar() {
  const [menuBtn, setMenuBtn] = useState(false);
  const [activeMenu, setActiveMenu] = useState("menu");

  function toggler() {
    setMenuBtn(!menuBtn);
    console.log("toggler");
    activeMenu === "menu"
      ? setActiveMenu(" menu_active menu")
      : setActiveMenu("menu");
  }
  useEffect(() => {}, [menuBtn]);
  return (
    <>
      <nav className="relative nav_bg w-screen">
        <div className=" mx-2 flex gap-4 justify-between items-center sm:mx-6 md:justify-evenly">
          <div className="w-10 m-2 basis-10">
            <img className="w-full" src={logo} alt="logo-img" />
          </div>
          <div className=" basis-auto font-bold uppercase text-xs sm:text-lg md:basis-1/2">
            <NavLink
              to="/"
              className=""
            >
              Customer Realtion Management
            </NavLink>
          </div>
       
          <div className={activeMenu}>
            <ul className="md:flex">
              <li className="menu-items">
                <NavLink to="/signup" 
                className="menu-href">
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
          <div
            className="basis-1/12 md:hidden"
            onClick={toggler}
          >
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
      </nav>
    </>
  );
}

export default Navbar;
