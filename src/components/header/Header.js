import { NavLink } from "react-router-dom";
import {
  FaUserAlt,
  FaClipboardList,
  FaBriefcase,
  FaHome,
  FaBars,
} from "react-icons/fa";
import "./header.scss";

const Header = () => {
  return (
    <header className="aside">
      <div className="logo">
        <NavLink to="/">
          <span>Z</span>
          eeshan
        </NavLink>
      </div>
      <div className="nav-toggler">
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
            <NavLink to="/Services">
              <FaClipboardList className="nav-icon" /> Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio">
              <FaBriefcase className="nav-icon" /> Porfolio
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
