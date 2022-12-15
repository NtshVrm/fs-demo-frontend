import { useEffect, useState } from "react";
import axios from "axios";
import "./products.css";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const inCart = true;
  useEffect(() => {
    const getCart = async () => {
      var cartList = await axios.get(
        "https://fs-backend-demo.onrender.com/api/cart"
      );
      console.log(cartList);
      setCart(cartList.data);
    };
    getCart();
  }, [cart]);
  return (
    <div className="page-container">
      <Navbar />
      <div className="body-container">
        <div>Products</div>
        <div className="product-container">
          {cart.map((product) => {
            return (
              <ProductCard product={product} inCart={inCart} key={product.id} />
            );
          })}
        </div>
      </div>
      <div className="footer-container">Footer</div>
    </div>
  );
}
