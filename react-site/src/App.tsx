import { Routes, Route, Link } from "react-router-dom";
import DueSeasonIndexPage from "./pages/DueSeasonIndex";
import LandingPageAISEO from "./pages/OriginalLandingPage";

function App() {
  return (
    <div>
      <nav style={{ padding: "1rem", background: "#f6e9da" }}>
        <Link to="/" style={{ marginRight: 16 }}>
          Home
        </Link>
        <Link to="/due-season-index">Due Season Index</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPageAISEO />} />
        <Route path="/due-season-index" element={<DueSeasonIndexPage />} />
      </Routes>
    </div>
  );
}

export default App;
