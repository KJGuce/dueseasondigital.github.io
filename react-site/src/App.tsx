import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./variables.css";
import "./App.css";

// Handle GitHub Pages routing
const basename =
  window.location.pathname.split("/")[1] === "dueseasondigital.github.io"
    ? "/dueseasondigital.github.io"
    : "";

function App() {
  return (
    <Router basename={basename}>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          {" "}
          {/* Add padding-top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
