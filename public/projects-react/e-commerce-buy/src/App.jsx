// App.jsx
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  let text =
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.";
  let backtext = "SNEAKER COMPANY";
  let maintext = "Fall Limited Edition Sneakers";
  let price = 125.0;

  const [count, setCount] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addOne = () => {
    setCount((prev) => prev + 1);
  };

  const removeOne = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const addToCart = () => {
    setCartQuantity(count);
    setCount(0);
  };

  const resetCart = () => {
    setCartQuantity(0);
  };

  return (
    <>
      <Header
        quantity={cartQuantity}
        price={price}
        title={maintext}
        resetCart={resetCart}
      />
      <div className="main-stuff">
        <Main />
        <Aside
          text={text}
          backtext={backtext}
          maintext={maintext}
          price={price}
          count={count}
          addOne={addOne}
          removeOne={removeOne}
          addToCart={addToCart}
        />
      </div>
    </>
  );
}

export default App;
