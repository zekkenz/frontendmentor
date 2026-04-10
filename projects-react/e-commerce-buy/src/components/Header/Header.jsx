// Header.jsx
import { useState, useRef, useEffect } from "react";
import "./Header.css";
import Cart from "./Cart/Cart.jsx";
import Amount from "./Amount/Amount.jsx";

function Header({ quantity, price, title, resetCart }) {
  const [isToggled, setIsToggled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsToggled(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="header-wrapper">
        <div className="main-header">
          <div className="mobile-menu-btn" onClick={handleMenuToggle}>
            <img src="icon-menu.svg" alt="Open menu" />
          </div>

          <div className="logo">
            <img src="logo.svg" alt="icono de logo" />
          </div>

          <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <div className="close-menu-btn" onClick={handleMenuToggle}>
              <img src="icon-close.svg" alt="Close menu" />
            </div>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>

          {isMobileMenuOpen && (
            <div className="overlay" onClick={handleMenuToggle}></div>
          )}

          <div className="right-icons">
            <div ref={cartRef} className="cart-wrapper">
              <div
                className="icon-shop"
                onClick={handleToggle}
                tabIndex={0}
                role="button"
                aria-label="Toggle cart"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleToggle();
                  }
                }}
              >
                <img src="icon-cart.svg" alt="shop icon" />
                {quantity > 0 && <Amount quantity={quantity} />}
              </div>
              {isToggled && (
                <Cart
                  quantity={quantity}
                  price={price}
                  title={title}
                  resetCart={resetCart}
                />
              )}
            </div>

            <div className="icon-avatar">
              <img src="image-avatar.png" alt="profile icon" />
            </div>
          </div>
        </div>

        <div className="header-line"></div>
      </div>
    </>
  );
}

export default Header;
