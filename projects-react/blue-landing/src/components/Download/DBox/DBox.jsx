// Dbox.jsx
import "./DBox.css";
//
function DBox({ icon, title, version }) {
  return (
    <>
      <div className="container-dbox">
        <img src={icon} alt="Image of the app for download" />
        <h4>Add to {title}</h4>
        <p>Minimum version {version}</p>
        <img src="bg-dots.svg" alt="dots reference" />
        <div className="button-chi">
          <button>Add & Install Extension</button>
        </div>
      </div>
    </>
  );
}
export default DBox;
