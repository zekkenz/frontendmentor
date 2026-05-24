// Part2skel.jsx
import "./Part2skel.css";
//
function Part2skel({ title, text, initial }) {
  return (
    <>
      <div className="container-part2skel">
        <div className="part2skel-image-wrapper">
          <img
            src={`illustration-features-tab-${initial + 1}.svg`}
            alt="Illustration picture"
          />
        </div>

        <div className="part2skel-texts-zone">
          <div className="part2skel-title">{title}</div>

          <div className="part2skel-text">{text}</div>

          <button className="info-btn">More Info</button>
        </div>
      </div>
    </>
  );
}

export default Part2skel;
