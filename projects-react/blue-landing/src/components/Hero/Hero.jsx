// Hero.jsx
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="buttoncitos">
            <button>Get it on Chrome</button>
            <button>Get it on Firefox</button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src="illustration-hero.svg" alt="hero illustration" />
        </div>
      </div>
    </>
  );
}
export default Hero;
