import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="nav-heading" onClick={() => navigate("/")}>
        ECommerce - App
      </div>
      <div className="nav-button" onClick={() => navigate("/Cart")}>
        CART
      </div>
    </div>
  );
}
