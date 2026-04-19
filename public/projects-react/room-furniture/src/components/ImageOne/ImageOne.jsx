// ImageOne.jsx
import { useState } from "react";
import "./ImageOne.css";

function ImageOne({ currentImg }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="part1-container">
      <picture>
        <source media="(max-width: 768px)" srcSet={currentImg.mobileImg} />
        <img src={currentImg.desktopImg} alt="Hero" className="hero-img" />
      </picture>

      <div className="mini-header">
        <div
          className="hamburger-container"
          onClick={() => setIsMenuOpen(true)}
        >
          <img src="/icon-hamburger.svg" alt="clickable menu icon" />
        </div>
        <img src="logo.svg" alt="logo" className="logo-icon" />
        <ul>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <img
          src="/icon-close.svg"
          alt="close menu"
          className="close-btn"
          onClick={() => setIsMenuOpen(false)}
        />
        <ul className="mobile-nav">
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
}
export default ImageOne;
