// Questions.jsx
import "./Questions.css";
import Accor from "./Accor/Accor.jsx";
import Part1 from "../Info/Part1/Part1.jsx";
//
function Questions() {
  return (
    <>
      <div className="container-questions">
        <Part1
          title="Frequently Asked Questions"
          text="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
        />
        <Accor />
      </div>
    </>
  );
}
export default Questions;
