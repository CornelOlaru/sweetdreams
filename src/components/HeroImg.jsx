import "./heroImg.css"
import heroImg from "../assets/hero_img.jpeg"


export default function HeroImg() {
  return (
    <div className="hero-img-container">
     
      <img className="hero-img"  src={heroImg} alt="Hero Img" >
      </img>
    
    </div>
  )
}
