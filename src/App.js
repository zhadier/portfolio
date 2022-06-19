import Home from "./components/home/Home";
import Header from "./components/header/Header";
import About from "./components/about/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
