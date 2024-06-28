import { Link } from "react-router-dom";
import "./footer.css";
import anpc1 from "../assets/anpc-sal.webp";
import anpc2 from "../assets/anpc-sol.png";
import visaCards from "../assets/cards.png";
import instagramICO from "../assets/instagram.svg";
import facebookICO from "../assets/facebook.svg";
import twitterICO from "../assets/twitter-x.svg";

export default function Footer() {
  const onClickFunction = () => {
    alert("Check out the Contact page!!!")
  }
  return (
    <div className="footer-container">
      <div className="container first-footer-container">
        <div className="social">
          <h5 className="footer-title">Social</h5>
          <div className="social-separator"></div>
          <ul className=" social-icons">
            <li>
              <a href="https://facebook.com" target="_blank">
                <img src={facebookICO} alt="facebook icon" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                <img src={instagramICO} alt="instagram icon" />
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank">
                <img src={twitterICO} alt="twitter icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="popular_products">
          <h5 className="footer-title">Popular Products</h5>
          <div className="social-separator"></div>
          <ul>
            <Link to="/category/1" className="footer-links ">
              <li><a href="">Cakes</a></li>
            </Link>
            <Link to="/category/2" className="footer-links">
              <li><a href="">Pastry</a></li>
            </Link>
            <Link to="/category/3" className="footer-links">
              <li><a href="">Cookies</a></li>
            </Link>
          </ul>
        </div>
        <div className="help">
          <h5 className="footer-title">Help</h5>
          <div className="social-separator"></div>
          <ul>
            <Link to="/About" className="footer-links">
              <li><a href="">About us</a></li>
            </Link>
            <Link to="/Contact" className="footer-links">
              <li><a href="">Contact</a></li>
            </Link>
            <Link className="footer-links">
              <li><a href="" onClick={onClickFunction}>Help</a></li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="container second-footer-container">
        <hr style={{ width: "100%" }} />
        <p className="footer-text" style={{ padding: "10px" }}>Powered by SweetDreams Co.</p>
        <div>
          <img style={{ maxWidth: "100%" }} src={visaCards} alt="visa-img" />
        </div>
        <div className="footer-text">
          <a target="_blank" title="" href="https://anpc.ro/ce-este-sal/">
            <img style={{ height: "28px" }} src={anpc1} alt="anpc img" />
          </a>
          <a
            target="_blank"
            title=""
            href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&amp;lng=RO"
          >
            <img style={{ height: "28px" }} src={anpc2} alt="anpc img" />
          </a>
          <div className="footer-text">
            ©2024
            <span itemScope="" itemType="http://schema.org/LocalBusiness">
              &nbsp;&nbsp;&nbsp; <span itemProp="name">Sweet Dreams</span>
              <span
                itemProp="address"
                itemScope=""
                itemType="http://schema.org/PostalAddress"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span itemProp="addressCountry">Romania</span>,&nbsp;
                <span itemProp="addressLocality">BUCURESTI</span>,&nbsp; strada{" "}
                <span itemProp="streetAddress">Lorem ipsum dolor sit amet</span>
                ,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span itemProp="addressRegion">Bucuresti</span>,
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cod postal{" "}
                <span itemProp="postalCode">000000</span>, &nbsp;&nbsp;&nbsp;{" "}
              </span>
              <br />
              telefon: <span itemProp="telephone">+40000111222</span>
              <br />
              email: <span itemProp="email">contact@sweetdreams.ro</span>
              <br />
              <span itemProp="legalName">PATISERIA SWEET DREAMS SRL</span>, cod
              fiscal <span itemProp="vatID">00000000</span> <br />
              <Link to="/">
                <div className="footer-logo">
                  <h1>Sweet Dreams</h1>
                </div>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
