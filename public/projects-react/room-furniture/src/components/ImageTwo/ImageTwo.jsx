// ImageTwo.jsx
import "./ImageTwo.css";
import CentralText from "./CentralText/CentralText.jsx";
import Arrows from "./Arrows/Arrows.jsx";

function ImageTwo({ data, next, prev }) {
  return (
    <div className="part2-container">
      <CentralText title={data.title} text={data.text} />
      <Arrows next={next} prev={prev} />
    </div>
  );
}
export default ImageTwo;
