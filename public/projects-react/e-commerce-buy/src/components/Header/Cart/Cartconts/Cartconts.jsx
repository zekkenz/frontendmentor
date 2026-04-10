// Cartconts.jsx
import "./Cartconts.css";

function Cartconts({ quantity, price, title, resetCart }) {
  const result = price * quantity;

  return (
    <>
      <div className="cartconts-container">
        <div className="cartconts-cont">
          <img
            src="image-product-1-thumbnail.jpg"
            alt="in cart, little product image"
            className="thumbnail-img"
          />
          <div className="cart-texts">
            <div className="title">{title}</div>
            <div className="price-row">
              <div className="price">
                ${price.toFixed(2)} x {quantity}
              </div>
              <div className="result">${result.toFixed(2)}</div>
            </div>
          </div>
          <img
            src="icon-delete.svg"
            alt="delete use icon"
            className="delete-icon"
            onClick={resetCart}
          />
        </div>
        <button>Checkout</button>
      </div>
    </>
  );
}

export default Cartconts;
