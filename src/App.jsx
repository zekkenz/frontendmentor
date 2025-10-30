import "./App.css";
import "./stylesmain/name.css";
import "./stylesmain/styles.css";
import TypeIt from "typeit-react";
function App() {
  return (
    <>
      <div class="mainsite">
        <div class="namecontainer">
          <TypeIt class="name">Pxndxra Designs</TypeIt>
        </div>
        <div class="projects">
          <div class="projects-scroll">
            <ul>
              <li>
                <a href="./projects/bento-grid/bento.html">
                  <span class="gthan">&gt;</span> Bento-Grid
                </a>
              </li>
              <hr />
              <li>
                <a href="./projects/testimonials/testimonials.html">
                  <span class="gthan">&gt;</span> Testimonials design
                </a>
              </li>
              <hr />
              <li>
                <a href="./projects/tip-calculator/tip-calculator.html">
                  <span class="gthan">&gt;</span> Tip Calculator
                </a>
              </li>
              <hr />

              <li>
                <a href="./projects/qr-code/qrcode.html">
                  <span class="gthan">&gt;</span> QR code
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <span class="gthan">&gt;</span> creando 2...
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <span class="gthan">&gt;</span> creando 3...
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <span class="gthan">&gt;</span> creando 4...
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <span class="gthan">&gt;</span> creando 5...
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
