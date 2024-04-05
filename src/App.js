// Fruts App.js

// IMPORTS
// ----------------------------------
// Router for navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Custom Hooks
import ScrollToTop from "./components/ScrollToTop.jsx";
// Custom Mouse Cursor
import AnimatedCursor from "react-animated-cursor";
// Pages
import LandingPage from "./components/pages/LandingPage.jsx";
import TimelinePage from "./components/pages/TimelinePage.jsx";
import ComparePage from "./components/pages/ComparePage.jsx";
// ----------------------------------

// APP.JS
// ----------------------------------
function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedCursor />
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/compare" element={<ComparePage />} exact />
        <Route path="/timeline" element={<TimelinePage />} exact />
      </Routes>
    </Router>
  );
}
// ----------------------------------

export default App;
