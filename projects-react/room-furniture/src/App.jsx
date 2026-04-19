// App.jsx
import { useState } from "react";
import "./App.css";
import ImageOne from "./components/ImageOne/ImageOne.jsx";
import ImageTwo from "./components/ImageTwo/ImageTwo.jsx";
import ImageThree from "./components/ImageThree/ImageThree.jsx";
import ImageFour from "./components/ImageFour/ImageFour.jsx";
import ImageFive from "./components/ImageFive/ImageFive.jsx";

const sliderData = [
  {
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    desktopImg: "/desktop-image-hero-1.jpg",
    mobileImg: "/mobile-image-hero-1.jpg",
  },
  {
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    desktopImg: "/desktop-image-hero-2.jpg",
    mobileImg: "/mobile-image-hero-2.jpg",
  },
  {
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    desktopImg: "/desktop-image-hero-3.jpg",
    mobileImg: "/mobile-image-hero-3.jpg",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  return (
    <div className="main-roomgrid">
      <ImageOne currentImg={sliderData[currentIndex]} />
      <ImageTwo
        data={sliderData[currentIndex]}
        next={nextSlide}
        prev={prevSlide}
      />
      <ImageThree />
      <ImageFour />
      <ImageFive />
    </div>
  );
}

export default App;
