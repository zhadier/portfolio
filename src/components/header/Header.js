import { NavLink } from 'react-router-dom';
import { FaUserAlt, FaClipboardList, FaBriefcase, FaHome } from 'react-icons/fa';
import './header.scss'

const Header = () => {
  return (
    <header className="aside">
      <div className="logo">
      <NavLink to="/">
          <span>Z</span>
          eeshan
      </NavLink>
      </div>

      <div>

      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="">
              <FaHome className="nav-icon"/> Home
            </NavLink>
            </li>
               <li>
            <NavLink to="">
              <FaUserAlt className="nav-icon" /> About
            </NavLink>
            </li>
               <li>
            <NavLink to="">
              <FaClipboardList className="nav-icon" /> Services
            </NavLink>
            </li>
               <li>
            <NavLink to="">
              <FaBriefcase className="nav-icon" /> Porfolio
            </NavLink>
            </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
