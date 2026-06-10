import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Platform from "./pages/Platform";
import Insights from "./pages/Insights";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/contactUs" element={<ContactUs />} />
    </Routes>
  );
}

export default App;