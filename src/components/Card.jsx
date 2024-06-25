import PropTypes from 'prop-types';
import "./card.css"
const Card = ({ category, name, price, shortDescription, image }) => {
  return (
    <div className="container card1">
      <h2>{category}</h2>
      <img className='card-img-top'  src={image} alt="img" />
      <span>
       <strong>{name}</strong>
      </span>
      <br />
      <span>
        <strong>{price}</strong>
      </span>
      <br />
      <span>
        <strong>{shortDescription}</strong>
      </span>
      <br />
      <button className='btn btn-outline-danger w-100' >
        View
      </button>
    </div>
  );
};

Card.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  shortDescription: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  
};

export default Card;
