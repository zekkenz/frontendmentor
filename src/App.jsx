import "./App.css";
import "./stylesmain/name.css";
import "./stylesmain/styles.css";
import TypeIt from "typeit-react";
function App() {
  return (
    <>
      <div className="mainsite">
        <div className="namecontainer">
          <TypeIt
            getBeforeInit={(instance) => {
              const parts = [
                " Designs",
                " Apps",
                " Webpages",
                " Projects",
                " Designs",
                " Apps",
                " Webpages",
                " Projects",
                " Designs",
                " Apps",
                " Webpages",
                " Projects",
                " Designs",
                " Apps",
                " Webpages",
                " Projects",
                " Designs",
                " Apps",
                " Webpages",
                " Projects",
                " Designs",
                " Apps",
                " Webpages",
                " Projects",
                " Designs",
                " Apps",
                " Webpages",
                " Projects",
                " Designs",
                " Apps",
                " Webpages",
                " Projects",
                " Designs",
                " Apps",
                " Webpages",
                " Projects",
              ];

              instance.type("Pxndxra");
              instance.pause(500).type(parts[0]);

              for (let i = 1; i < parts.length; i++) {
                instance
                  .pause(1500)
                  .delete(parts[i - 1].length)
                  .type(parts[i]);
              }
              instance
                .pause(1500)
                .delete(parts[parts.length - 1].length)
                .type(parts[0])
                .pause(1500)
                .go();

              return instance;
            }}
            options={{
              speed: 120,
              deleteSpeed: 120,
              breakLines: false,
              cursor: true,
            }}
            as="span"
            className="name-animated"
          />
        </div>
        <div className="projects">
          <div className="projects-scroll">
            <ul>
              <li>
                <a href="./projects/weather-app/weather-app.html">
                  <span className="gthan">&gt;</span> Weather App
                </a>
              </li>
              <hr />
              <li>
                <a href="./projects/calc/calc.html">
                  <span className="gthan">&gt;</span> Calculator
                </a>
              </li>
              <hr />
              <li>
                <a href="./projects/todo-app/todo-app.html">
                  <span className="gthan">&gt;</span> Todo-App
                </a>
              </li>
              <hr />
              <li>
                <a href="./projects/tip-calculator/tip-calculator.html">
                  <span className="gthan">&gt;</span> Tip-Calculator
                </a>
              </li>
              <hr />
              <li>
                <a href="./projects/bento-grid/bento.html">
                  <span className="gthan">&gt;</span> Bento-Grid Design
                </a>
              </li>
              <hr />
              <li>
                <a href="./projects/testimonials/testimonials.html">
                  <span className="gthan">&gt;</span> Testimonials Design
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <span className="gthan">&gt;</span> TBA...
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <span className="gthan">&gt;</span> TBA...
                </a>
              </li>
              <hr />
            </ul>
          </div>
        </div>
        <h1>&nbsp;&nbsp;Made by Pxndxra</h1>
      </div>
    </>
  );
}

export default App;
