import "./card.css";
import axios from "axios";
export default function ProductCard({ product, inCart }) {
  const addToCart = async (product) => {
    const response = await axios.post(
      "https://fs-backend-demo.onrender.com/api/cart",
      product
    );
    console.log(response);
  };
  const removeFromCart = async (product) => {
    const response = await axios.delete(
      "https://fs-backend-demo.onrender.com/api/cart",
      { data: { id: String(product.id) } }
    );
    console.log(response);
  };

  return (
    <div className="card-container">
      <img alt="prod" src="https://picsum.photos/200" />
      <div className="title">{product.title}</div>
      <div>Ratings: {product.rating}</div>
      <div className="green">
        {product.discountPrice}
        <span className="strike"> {product.price}</span>
      </div>
      {inCart ? (
        <div className="remove-button" onClick={() => removeFromCart(product)}>
          Remove from Cart
        </div>
      ) : (
        <div
          className="card-button"
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to Cart
        </div>
      )}
    </div>
  );
}
