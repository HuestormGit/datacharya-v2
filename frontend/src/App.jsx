import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Approach from "./pages/Approach";
import Platform from "./pages/Platform";
import Insights from "./pages/Insights";
import ContactUs from "./pages/ContactUs";
import AdvisoryPage from "./pages/Advisory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/approach" element={<Approach />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/advisory" element={<AdvisoryPage />} />
    </Routes>
  );
}

export default App;
