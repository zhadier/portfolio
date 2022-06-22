import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import {
  FaUserAlt,
  FaClipboardList,
  FaBriefcase,
  FaHome,
  FaBars,
} from 'react-icons/fa';
import './header.scss';

const Header = ({ menu, handleHamburger, handleLinkClick }) => {
  const handleMenuClick = () => {
    handleHamburger();
  };
  return (
    <header className={`aside ${menu && 'open'}`}>
      <div className="logo">
        <NavLink to="/" onClick={handleLinkClick}>
          <span>Z</span>
          eeshan
        </NavLink>
      </div>
      <button
        type="button"
        className={`nav-toggler ${menu && 'open'}`}
        onClick={handleMenuClick}
      >
        {!menu ? (
          <FaBars className="hamburger" />
        ) : (
          <AiOutlineClose className="hamburger" />
        )}
      </button>

      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/" onClick={handleLinkClick}>
              <FaHome className="nav-icon" />
              {' '}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={handleLinkClick}>
              <FaUserAlt className="nav-icon" />
              {' '}
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio" onClick={handleLinkClick}>
              <FaBriefcase className="nav-icon" />
              {' '}
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={handleLinkClick}>
              <FaClipboardList className="nav-icon" />
              {' '}
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
