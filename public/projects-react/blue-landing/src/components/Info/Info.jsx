// Info.jsx
import "./Info.css";
//
import Part1 from "./Part1/Part1.jsx";
import Part2 from "./Part2/Part2.jsx";
function Info() {
  return (
    <>
      <Part1
        title="Features"
        text="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
      />
      <Part2 />
    </>
  );
}
export default Info;
