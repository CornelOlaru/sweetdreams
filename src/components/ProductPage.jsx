
import "./productPage.css";
import cookies from "../assets/cookies.jpeg";

const ProductPage = () => {
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img
          src={cookies}  // Replace with the path to your cookie image
          alt="Cookie cu Ciocolata"
          className="product-image"
        />
      </div>
      <div className="product-details-container">
        <h1 className="product-title">Cookie cu Ciocolata</h1>
        <p className="product-description">
          Enjoy our delicious chocolate chip cookies, baked to perfection with
          high-quality ingredients. Crispy on the outside, chewy on the inside,
          and loaded with rich chocolate chips.
        </p>
        <p className="product-price">Price: $2.99 each</p>
        <div className="product-quantity">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
        </div>
        <button className="btn btn-primary add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
