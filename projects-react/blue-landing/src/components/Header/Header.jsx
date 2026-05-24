// Header.jsx
import { useState } from "react";
import "./Header.css";
import Container from "../Container/Container.jsx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={isMenuOpen ? "mobile-menu-open" : ""}>
        <img
          src={isMenuOpen ? "logo-bookmark-white.svg" : "logo-bookmark.svg"}
          alt="logo at left"
          className="header-logo"
        />

        <img
          src={isMenuOpen ? "icon-close.svg" : "icon-hamburger.svg"}
          alt="menu toggle"
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <Container>
          <ul className={isMenuOpen ? "nav-open" : ""}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>
              <button className="login-btn">Login</button>
            </li>
            {isMenuOpen && (
              <li className="social-icons">
                <img src="icon-facebook.svg" alt="Facebook" />
                <img src="icon-twitter.svg" alt="Twitter" />
              </li>
            )}
          </ul>
        </Container>
      </header>
    </>
  );
}

export default Header;
