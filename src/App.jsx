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

              instance.type("Pxndora");
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
                <a href="./projects/bento-grid/bento.html">
                  <span className="gthan">&gt;</span> Bento-Grid
                </a>
              </li>
              <hr />
              <li>
                <a href="./projects/testimonials/testimonials.html">
                  <span className="gthan">&gt;</span> Testimonials design
                </a>
              </li>
              <hr />
              <li>
                <a href="./projects/tip-calculator/tip-calculator.html">
                  <span className="gthan">&gt;</span> Tip Calculator
                </a>
              </li>
              <hr />

              <li>
                <a href="./projects/qr-code/qrcode.html">
                  <span className="gthan">&gt;</span> QR code
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <span className="gthan">&gt;</span> creando 2...
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <span className="gthan">&gt;</span> creando 3...
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <span className="gthan">&gt;</span> creando 4...
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <span className="gthan">&gt;</span> creando 5...
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
