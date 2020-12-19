import React, { useState } from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  // toggle hamburger start
  const [navbar, setnavbar] = useState({
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
  });
  const mytoggler = () => {
    if (navbar.navbarState === true) {
      setnavbar({
        navbarState: false,
        navbarClass: "collapse navbar-collapse",
      });
    } else {
      setnavbar({
        navbarState: true,
        navbarClass: "collapse navbar-collapse show",
      });
    }
  };
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink exact className="navbar-brand" to="/">
                  AzadPunchy
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={mytoggler}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/*from here we will begin*/}
                <div className={navbar.navbarClass} id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link active hov"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link hov"
                        to="/service"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link hov"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link hov"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
