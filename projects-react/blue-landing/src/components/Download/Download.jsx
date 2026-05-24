// Download.jsx
import "./Download.css";
import Part1 from "../Info/Part1/Part1.jsx";
import DBox from "./DBox/DBox.jsx";
//
function Download() {
  return (
    <>
      <div className="container-download">
        <Part1
          title="Download the extension"
          text="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
        />
        <div className="dbox-big-container">
          <DBox icon="logo-chrome.svg" title="Chrome" version="62" />
          <DBox icon="logo-firefox.svg" title="Firefox" version="55" />
          <DBox icon="logo-opera.svg" title="Opera" version="46" />
        </div>
      </div>
    </>
  );
}
export default Download;
