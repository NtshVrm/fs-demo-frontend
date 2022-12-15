import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import "./products.css";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      var prodList = await axios.get(
        "https://fs-backend-demo.onrender.com/api/products"
      );
      console.log(prodList);
      setProducts(prodList.data);
    };
    getProducts();
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      <div className="body-container">
        <div>Products</div>
        <div className="product-container">
          {products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </div>
      <div className="footer-container">Footer</div>
    </div>
  );
}
