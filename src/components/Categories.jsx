import getProductsForCategory from "./ProductsList";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Navbar from "./Navbar";

export default function Categories() {
  const { categoryId } = useParams();
  const category = getProductsForCategory(categoryId);
  console.log(category);
  return (
    <div className="">
    <Navbar/>
    <div className="container">

    <div className="grid">
      {category.map((item) => (
        
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


