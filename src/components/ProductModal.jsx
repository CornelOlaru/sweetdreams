
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const ProductModal = ({ show, handleClose, product, handleBuy }) => {
  if (!product) return null;

  return (
    <Modal className='' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.image} alt={product.name} className="img-fluid rounded mb-3" />
        {/* <h4>{product.category}</h4> */}
        <p><strong>Price: </strong>{product.price}</p>
        <p>{product.shortDescription}</p>

        <p><strong>Details: </strong> <br />{product.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleBuy}>
          Buy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleBuy: PropTypes.func.isRequired,
  product: PropTypes.object,
};

export default ProductModal;