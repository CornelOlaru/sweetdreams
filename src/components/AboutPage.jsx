import "./about.css";
import s_d_interior from "../assets/sweet_dreams_interior.jpeg";
import Products from "./Products";
import { useState } from "react";
export default function AboutPage() {
  const [more, setMore] = useState(false);
  function readMoreFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read-more-btn");
    if (more) {
        setMore == true;
    }
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  return (
    <div className=" about-container">
      <div className="container about-sub-container1">
        <img
          className="s-d-interior"
          src={s_d_interior}
          alt="Sweet Dreams Interior"
        />
        <h2 className="about-title">Our Story</h2>
        <p className="about-story">
          Once upon a time, in a quaint town brimming with cobblestone streets
          and the sweet fragrance of blooming flowers, three ambitious students
          embarked on a delightful culinary adventure. They shared a common
          dream, a vision to sprinkle a dash of joy in every bite, and thus, the
          idea of “Sweet Dreams” was born. Alex, Jordan, and Taylor were
          classmates in culinary school, each with a unique talent that
          complemented the others. Alex had a magical touch with pastries,
          crafting layers of flaky goodness that melted hearts. Jordan, the
          cookie connoisseur, could mix, match, and bake cookies that danced on
          the taste buds. And Taylor, the macaron maestro, painted the town with
          colorful, delicate macarons that were almost too pretty to eat. As
          their final year project, they decided to turn their dream into
          reality. <span id="dots">... </span>
          <span id="more">
            They found a cozy corner shop that looked like it leapt out of a
            storybook, with large windows that invited the morning sun and a
            vintage sign that swayed gently in the breeze. With a lick of paint,
            a sprinkle of creativity, and a whole lot of love, “Sweet Dreams”
            was ready to welcome the world. The grand opening was a festival of
            flavors. The townsfolk gathered, enticed by the aroma of freshly
            baked goods. The display was a canvas of colors and textures: golden
            croissants, chocolate chip cookies with molten centers, and macarons
            in hues that mirrored the rainbow. Word of their delightful treats
            spread like warm butter, and soon, “Sweet Dreams” became more than
            just a shop; it became a haven for those seeking comfort in a bite,
            a place where every frown turned upside down. The trio worked
            tirelessly, their passion evident in every pastry, cookie, and
            macaron that left the kitchen. As the seasons changed, so did their
            menu, always fresh, always innovative. They hosted baking workshops,
            shared their recipes with children, and became an integral part of
            the community. “Sweet Dreams” wasn’t just their first business; it
            was a testament to their friendship, a symbol of their dedication,
            and a story that would be told for generations to come. And so, the
            legacy of “Sweet Dreams” continues, a sweet reminder that dreams, no
            matter how small, can create the most beautiful realities. 🍰🍪🌈
          </span>
        </p>
        <button
          onClick={readMoreFunction}
          type="button"
          id="read-more-btn"
          className="btn"
        >
          Read More
        </button>
      </div>
     
      <Products />
    </div>
  );
}
