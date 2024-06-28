// import {  Navbar } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function CategoryNavbar({value, onChange}) {
  return (
    <div>
      <navbar className=" secondary-nav">
  
  
  <div className="navbar-collapse">
    <ul className="secondary-nav-menu ">
      <li className="nav-item active ">
        <Link className="nav-link" to="/Products">All <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/category/1">Cakes</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/category/2">Pastries</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/category/3">Cookies</Link>
      </li>
    </ul>
  </div>
    <form className=" nav-form">
    <input className="form-control mr-sm-2" type="search" placeholder="Search for a product name..." aria-label="Search" value={value} onChange={onChange}/>
    {/* <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button> */}
  </form>
</navbar>
    </div>
  )
}
CategoryNavbar.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    
  };
  