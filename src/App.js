import "./styles.css";
import { Route, Routes } from "react-router";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
