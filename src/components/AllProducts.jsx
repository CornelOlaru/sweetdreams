import { useState } from "react";
import Card from "./Card";
import AllProductsList from "./AllProductsList";
// import { Nav } from "react-bootstrap";
import ProductModal from "./ProductModal";
import CategoryNavbar from "./CategoryNavbar";


export default function AllProducts() {
  const [localProducts, setLocalProducts] = useState([...AllProductsList]);
  const [nameFilter, setNameFilter] = useState("");
  const [category] = useState(""); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // const [priceFilter, setPriceFilter] = useState(0);
  
  
  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };
const handleBuyModal = () => {
  alert("The product has been bought!!")
  setShowModal(false)
}
  // Combined filter function
  const filterProducts = (name) => {
    let newProducts = AllProductsList.filter(
      (item) =>
        item.name.toLowerCase().includes(name.toLowerCase()) &&
        (category === "" || item.category === category) 
        //&&
        //Number(item.price.substring(1)) >= price
    );
    setLocalProducts([...newProducts]);
  };

  // Filtrarea dupa nume
  const onNameFilterChange = (e) => {
    const newNameFilter = e.target.value;
    setNameFilter(newNameFilter);
    filterProducts(newNameFilter);
  };
  
  //Filtrarea dupa pret
  // const onPriceFilterChange = (e) => {
  //   const newPriceFilter = Number(e.target.value);
  //   setPriceFilter(newPriceFilter);
  //   filterProducts(nameFilter, newPriceFilter);
  // };

  return (
    <div className="main-container">
      <div className="container">

      
      <CategoryNavbar 
        value={nameFilter}
        onChange={onNameFilterChange}
      />
      
      {/* <Input value={nameFilter} onChange={onNameFilterChange} /> */}
      {/* <label>Filter by price: </label> */}
      {/* <Input type="number" value={priceFilter} onChange={onPriceFilterChange} /> */}
      <div className="container grid">
        {localProducts.map((item) => (
          <Card
            key={item.id}
            category={item.category}
            name={item.name}
            shortDescription={item.shortDescription}
            image={item.image}
            price={item.price}
            onView={() => handleViewProduct(item)} // Pass the product to the onView handler
          />
        ))}
      </div>
      <ProductModal
          show={showModal}
          handleClose={handleCloseModal}
          product={selectedProduct}
          handleBuy={handleBuyModal}
        />
    </div>
    </div>
  );
}
