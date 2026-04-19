// Arrows.jsx
import "./Arrows.css";

function Arrows({ next, prev }) {
  return (
    <div className="arrows-container">
      <button onClick={prev} className="arrow-btn">
        <img src="icon-angle-left.svg" alt="prev" />
      </button>
      <button onClick={next} className="arrow-btn">
        <img src="icon-angle-right.svg" alt="next" />
      </button>
    </div>
  );
}
export default Arrows;
