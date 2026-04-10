// Buttons.jsx
import "./Buttons.css";

function Buttons({ count, addOne, removeOne, addToCart }) {
  return (
    <>
      <div className="buttons-container">
        <div className="button-1">
          <div className="couple minus">
            <button onClick={removeOne}>
              <img src="icon-minus.svg" alt="minus button" />
            </button>
          </div>
          <div className="counter">{count}</div>
          <div className="couple plus">
            <button onClick={addOne}>
              <img src="icon-plus.svg" alt="plus button" />
            </button>
          </div>
        </div>
        <div className="button-2">
          <button onClick={addToCart}>
            <div className="cart-icon-btn"></div>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Buttons;
