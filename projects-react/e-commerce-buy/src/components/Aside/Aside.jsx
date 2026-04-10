// Aside.jsx
import "./Aside.css";
import Buttons from "./Buttons/Buttons.jsx";

function Aside({
  backtext,
  maintext,
  text,
  price,
  count,
  addOne,
  removeOne,
  addToCart,
}) {
  return (
    <>
      <div className="aside-container">
        <h2>{backtext}</h2>
        <h1>{maintext}</h1>
        <p>{text}</p>

        <div className="price-wrapper">
          <div className="offer">
            <h3>${price.toFixed(2)}</h3>
            <div className="discount">
              <div className="discount-num">50%</div>
            </div>
          </div>
          <div className="last_price">$250.00</div>
        </div>

        <Buttons
          count={count}
          addOne={addOne}
          removeOne={removeOne}
          addToCart={addToCart}
        />
      </div>
    </>
  );
}

export default Aside;
