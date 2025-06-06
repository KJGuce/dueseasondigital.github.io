import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const LandingPageAISEO = React.lazy(
  () => import("./pages/OriginalLandingPage")
);
const DueSeasonIndexPage = React.lazy(() => import("./pages/DueSeasonIndex"));

function App() {
  return (
    <div>
      <nav style={{ padding: "1rem", background: "#f6e9da" }}>
        <Link to="/" style={{ marginRight: 16 }}>
          Home
        </Link>
        <Link to="/due-season-index">Due Season Index</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPageAISEO />} />
          <Route path="/due-season-index" element={<DueSeasonIndexPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
