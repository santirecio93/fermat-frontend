import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Background from "./components/layout/Background";

import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Contact from "./pages/Contact";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />

        <Background>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Background>
      </Router>
    </LanguageProvider>
  );
}

export default App;