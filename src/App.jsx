import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mainsite">
        <div className="projects">
          <a href="/projects/bento-grid/bento">Bento-Grid</a>
          <a href="">TEST</a>
        </div>
      </div>
    </>
  );
}

export default App;
