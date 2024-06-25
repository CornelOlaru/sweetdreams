import "./products.css";
import tort from "../assets/tort_ciocolata.jpeg";
import cookies from "../assets/cookies.jpeg";
import prajituri from "../assets/prajituri.jpeg";
import { Link } from "react-router-dom";
export default function Products() {
  return (
    <div className="">
      <h2 className="products-title text-center mt-5">Our Products</h2>
      <div className="container products-container">
        <Link className="card-link" to="/category/1">
          <div className="img-container">
            <img className="img-element" src={tort} alt="Tort Ciocolata" />
          </div>
          <span className="card-title">Cakes</span>
        </Link>
        <Link className="card-link" to="/category/2">
          <div className="img-container">
            <img className="img-element" src={prajituri} alt="Prajituri" />
          </div>
          <span className="card-title">Pastry</span>
        </Link>
        <Link className="card-link" to="/category/3">
          <div className="img-container">
            <img className="img-element" src={cookies} alt="Cookies" />
          </div>
          <span className="card-title">Cookies</span>
        </Link>
      </div>
    </div>
  );
}
