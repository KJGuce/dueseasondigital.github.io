import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import DueSeasonIndexTool from "./pages/DueSeasonIndexTool";
import GEOFAQ from "./pages/GEOFAQ";
import GenerativeEngineOptimization from "./pages/GenerativeEngineOptimization";
import GEOFAQPage from "./pages/GEOFAQPage";
import GEOCaseStudies from "./pages/GEOCaseStudies";
import GEOBlog from "./pages/GEOBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import "./variables.css";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Banner />
        <Navbar />
        <main>
          {" "}
          {/* Add padding-top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/index-tool" element={<DueSeasonIndexTool />} />
            <Route path="/geofaq" element={<GEOFAQ />} />
            <Route
              path="/generative-engine-optimization"
              element={<GenerativeEngineOptimization />}
            />
            <Route
              path="/generative-engine-optimization/faq"
              element={<GEOFAQPage />}
            />
            <Route
              path="/generative-engine-optimization/case-studies"
              element={<GEOCaseStudies />}
            />
            <Route
              path="/generative-engine-optimization/blog"
              element={<GEOBlog />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
