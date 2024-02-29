import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import LandingPage from "./components/pages/LandingPage.jsx";
import TimelinePage from "./components/pages/TimelinePage.jsx";
import ComparePage from "./components/pages/ComparePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/compare" element={<ComparePage />} exact />
        <Route path="/timeline" element={<TimelinePage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
