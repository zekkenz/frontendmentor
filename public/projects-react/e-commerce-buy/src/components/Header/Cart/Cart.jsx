// Cart.jsx
import "./Cart.css";
import Cartconts from "./Cartconts/Cartconts.jsx";
import Cartfallback from "./Cartfallback/Cartfallback.jsx";

function Cart({ quantity, price, title, resetCart }) {
  return (
    <>
      <div className="container-cart-box" onClick={(e) => e.stopPropagation()}>
        <div className="cart-name">
          <p>Cart</p>
        </div>

        <div className="cart-zone">
          {quantity > 0 ? (
            <Cartconts
              quantity={quantity}
              price={price}
              title={title}
              resetCart={resetCart}
            />
          ) : (
            <Cartfallback />
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
