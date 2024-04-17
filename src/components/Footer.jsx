import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="first-footer-container">
        <div className="social">
          <h5 className="footer-title">Social</h5>
          <div className="social-separator"></div>
          <ul className="social-icons">
            <li>
              <a href="https://facebook.com" target="_blank">
                <img src="src/assets/facebook.svg" alt="facebook icon" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                <img src="src/assets/instagram.svg" alt="instagram icon" />
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank">
                <img src="src/assets/twitter-x.svg" alt="twitter icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="popular_products">
          <h5 className="footer-title">Popular Products</h5>
          <div className="social-separator"></div>
          <ul>
            <li>Cake</li>
            <li>Pastry</li>
            <li>Macarons</li>
          </ul>
        </div>
        <div className="help">
          <h5 className="footer-title">Help</h5>
          <div className="social-separator"></div>
          <ul>
            <li>About us</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="second-footer-container">
        <hr style={{ width: "100%" }} />
        <div>
          <img src="src/assets/cards.png" alt="visa-img" />
        </div>
        <div className="footer-text">
          <a target="_blank" title="" href="https://anpc.ro/ce-este-sal/">
            <img style={{ height: "28px" }} src="src/assets/anpc-sal.webp" />
          </a>
          <a
            target="_blank"
            title=""
            href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&amp;lng=RO"
          >
            <img style={{ height: "28px" }} src="src/assets/anpc-sol.png" />
          </a>
          <div className="footer-text">
            © 2020-2024
            <span itemScope="" itemType="http://schema.org/LocalBusiness">
              &nbsp;&nbsp;&nbsp; <span itemProp="name">DULCINELLA</span>
              <span
                itemProp="address"
                itemScope=""
                itemType="http://schema.org/PostalAddress"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span itemProp="addressCountry">Romania</span>,&nbsp;
                <span itemProp="addressLocality">IAȘI</span>,&nbsp; strada{" "}
                <span itemProp="streetAddress">
                  B-DUL DACIA, 24, BL:SC3, ET:P
                </span>
                ,&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span itemProp="addressRegion">Iași</span>,
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cod postal{" "}
                <span itemProp="postalCode">700423</span>, &nbsp;&nbsp;&nbsp;{" "}
              </span>
              <br />
              telefon: <span itemProp="telephone">+40770624826</span>
              <br />
              email: <span itemProp="email">contact@dulcinella.ro</span>
              <br />
              <span itemProp="legalName">PATISERIA DULCINELLA SRL</span>, cod
              fiscal <span itemProp="vatID">41563184</span> <br />
              <Link to="/">
        <div className="footer-logo" >
          <h1 >Sweet Dreams</h1>
        </div>
      </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
