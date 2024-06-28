import "./heroImg.css";
import heroImg from "../assets/hero_img.jpeg";
import Products from "./Products";
import UpButton from "./UpButton";

export default function HeroImg() {
  return (
    <div>
      <div className=" hero-img-container">
        <div className="container">
          <img className="hero-img" src={heroImg} alt="Hero Img" />
      <Products />
      <UpButton/>
        </div>
      </div>
    </div>
  );
}
