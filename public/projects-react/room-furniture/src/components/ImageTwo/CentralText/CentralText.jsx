// CentralText.jsx
import "./CentralText.css";

function CentralText({ title, text }) {
  return (
    <div className="central-container">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="central-shop">
        <h4>SHOP NOW</h4>
        <img src="icon-arrow.svg" alt="arrow icon" />
      </div>
    </div>
  );
}
export default CentralText;
