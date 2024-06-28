import  { useState, useEffect } from "react";
import getProductsForCategory from "./ProductsList";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Navbar from "./Navbar";
import ProductModal from "./ProductModal";
import Footer from "./Footer";
import CategoryNavbar from "./CategoryNavbar";


export default function Categories() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    const products = getProductsForCategory(categoryId);
    setCategory(products);
    setFilteredProducts(products);
  }, [categoryId]);

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
  // Filter products by name
  const filterProducts = (name) => {
    const newProducts = category.filter(
      (item) => item.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredProducts(newProducts);
  };

  const onNameFilterChange = (e) => {
    const newNameFilter = e.target.value;
    setNameFilter(newNameFilter);
    filterProducts(newNameFilter);
  };

  return (
    <div className="main-container">
      <Navbar />
      <div className="container">
        <CategoryNavbar value={nameFilter} onChange={onNameFilterChange} />

        <div className="container grid">
          {filteredProducts.map((item) => (
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
          handleBuy={handleBuyModal}
          product={selectedProduct}
        />
      </div>
      
      <Footer />
    </div>
  );
}
