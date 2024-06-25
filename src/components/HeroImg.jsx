import "./heroImg.css";
import heroImg from "../assets/hero_img.jpeg";
import Products from "./Products";

export default function HeroImg() {
  return (
    <div>
      <div className=" hero-img-container">
        <div className="container">
          <img className="hero-img" src={heroImg} alt="Hero Img" />
      <Products />
        </div>
      </div>
    </div>
  );
}
