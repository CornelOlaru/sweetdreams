import { useState } from "react";
import Card from "./Card";
import AllProductsList from "./AllProductsList";
import { Nav } from "react-bootstrap";


export default function AllProducts() {
  const [localProducts, setLocalProducts] = useState([...AllProductsList]);
  const [nameFilter, setNameFilter] = useState("");
  const [category] = useState("");
  // const [priceFilter, setPriceFilter] = useState(0);

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

      
      <Nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/category/1">Cakes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/category/2">Pastries</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/category/3">Cookies</a>
      </li>
    </ul>
  </div>
    <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search for a product..." aria-label="Search" value={nameFilter} onChange={onNameFilterChange}/>
    {/* <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button> */}
  </form>
</Nav>
      
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
          />
        ))}
      </div>
    </div>
    </div>
  );
}
