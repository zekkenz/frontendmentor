// Accor.jsx
import React, { useState } from "react";
import "./Accor.css";

const Accor = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.",
    },
    {
      id: 2,
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.",
    },
    {
      id: 3,
      question: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor.",
    },
    {
      id: 4,
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {questions.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  fill="none"
                  stroke="hsl(231, 69%, 60%)"
                  strokeWidth="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </span>
          </div>

          <div
            className={`accordion-content ${activeIndex === index ? "active" : ""}`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
      <button className="info-btn">More Info</button>
    </div>
  );
};

export default Accor;
