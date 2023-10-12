import "./App.css";
import AOS from "aos";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Connectivity } from "./pages/ConnectivityPage";
import { Tech } from "./pages/Tech";
import { Spaces } from "./pages/Spaces";
import { Work } from "./pages/Work";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Testimonial } from "./pages/Testimonial";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connectivity" element={<Connectivity/>} />
        <Route path="/tech" element={<Tech/>} />
        <Route path="/spaces" element={<Spaces/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
      </Routes>
    </div>
  );
}

export default App;
