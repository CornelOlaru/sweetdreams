import "./heroImg.css"
import heroImg from "../assets/hero_img.jpeg"
import Products from "./Products"


export default function HeroImg() {
  return (
    <div>

    <div className="hero-img-container">
      <img className="hero-img"  src={heroImg} alt="Hero Img" >
      </img>
      <div className="about-sub-container2">
        <h2 className="about-title">Our Products</h2>
      </div>
    </div>
      <Products/>
    </div>
  )
}
