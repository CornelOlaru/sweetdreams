import "./products.css"
import tort from "../assets/tort_ciocolata.jpeg"
import cookies from "../assets/cookies.jpeg"
import prajituri from "../assets/prajituri.jpeg"
import { Link } from "react-router-dom"
export default function Products() {
  return (
    <div className=" products-container">
      <Link to="/Products"><img className="img-element" src={tort} alt="Tort Ciocolata" /></Link>
      <Link to="/Products"><img className="img-element" src={prajituri} alt="Prajituri" /></Link>
      <Link to="/Products"><img className="img-element" src={cookies} alt="Cookies" /></Link>
    </div>
  )
}
