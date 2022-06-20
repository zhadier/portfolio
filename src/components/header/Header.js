import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaUserAlt,
  FaClipboardList,
  FaBriefcase,
  FaHome,
  FaBars,
} from "react-icons/fa";
import "./header.scss";

const Header = () => {
  const [menu, setMenu] = useState(true);

  const handleMenuClick = (e) => {
    setMenu((state) => !state);
  };
  return (
    <header className={`aside ${menu && "open"}`}>
      <div className="logo">
        <NavLink to="/">
          <span>Z</span>
          eeshan
        </NavLink>
      </div>
      <div className="nav-toggler" onClick={handleMenuClick}>
        <FaBars className="hamburger" />
      </div>

      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/">
              <FaHome className="nav-icon" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About">
              <FaUserAlt className="nav-icon" /> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio">
              <FaBriefcase className="nav-icon" /> Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact">
              <FaClipboardList className="nav-icon" /> Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
