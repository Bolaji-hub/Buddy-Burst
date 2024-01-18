import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Connect from "./pages/Connect";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goal" element={<Goals />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
