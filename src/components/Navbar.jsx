
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    
    
      <div className={color ? " header header-bg" : " header"}>
      <Link to="/">
        <div className=" logo">
          <h1>Sweet Dreams</h1>
        </div>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link className="active" to="/Products">Products</Link>
        </li>
        <li>
          <Link className="active" to="/About">About</Link>
        </li>
        <li>
          <Link className="active " aria-current="page" to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburgerMenu" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#7D4D38" }} />
        ) : (
          <FaBars size={20} style={{ color: "#7D4D38" }} />
        )}
      </div>
    </div>
        
  );
};

export default Navbar;