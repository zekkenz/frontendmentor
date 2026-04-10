// Main.jsx
import { useState, useRef } from "react";
import "./Main.css";

function Main() {
  const dialogRef = useRef(null);

  const images = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = () => {
    if (window.innerWidth > 600) {
      dialogRef.current?.showModal();
    }
  };
  const closeLightbox = () => dialogRef.current?.close();
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="images-main">
        <div className="image-current" onClick={openLightbox}>
          <button
            className="nav-arrow prev mobile-arrow"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <div className="arrow-prev-icon"></div>
          </button>
          <img src={images[currentIndex]} alt="product" />
          <button
            className="nav-arrow next mobile-arrow"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <div className="arrow-next-icon"></div>
          </button>
        </div>

        <ul className="image-list">
          {images.map((img, index) => (
            <li
              key={index}
              className={`product ${currentIndex === index ? "active-thumb" : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={img.replace(".jpg", "-thumbnail.jpg")}
                alt={`thumb ${index}`}
              />
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox-dialog"
        onClick={(e) => e.target === dialogRef.current && closeLightbox()}
      >
        <div className="lightbox-container">
          <button className="close-btn" onClick={closeLightbox}>
            <div className="close-icon"></div>
          </button>

          <div className="lightbox-main-content">
            <button className="nav-arrow prev" onClick={prevImage}>
              <div className="arrow-prev-icon"></div>
            </button>

            <img
              src={images[currentIndex]}
              alt="enlarged product"
              className="lightbox-img"
            />

            <button className="nav-arrow next" onClick={nextImage}>
              <div className="arrow-next-icon"></div>
            </button>
          </div>

          <ul className="image-list lightbox-thumbs">
            {images.map((img, index) => (
              <li
                key={index}
                className={`product ${currentIndex === index ? "active-thumb" : ""}`}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={img.replace(".jpg", "-thumbnail.jpg")} alt="thumb" />
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}

export default Main;
