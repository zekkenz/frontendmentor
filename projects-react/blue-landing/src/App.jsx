// App.jsx
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Info from "./components/Info/Info.jsx";
import Download from "./components/Download/Download.jsx";
import Questions from "./components/Questions/Questions.jsx";
import Prefooter from "./components/Prefooter/Prefooter.jsx";
import Footer from "./components/Footer/Footer.jsx";

//
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Info />
        <Download />
        <Questions />
        <Prefooter />
        <Footer />
      </div>
    </>
  );
}

export default App;
