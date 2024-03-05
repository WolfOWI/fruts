// Import Components (General)
import NavBar from "../NavBar/NavBar.jsx";
import Header from "./LandingComponents/LandingHeader.jsx";

function LandingPage() {
  return (
    <div className="bg-slate-50">
      {/* Header / Hero */}
      <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-b-3xl">
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
          <NavBar />
          <Header />
        </div>
      </div>
      <div>Timeline Page</div>
    </div>
  );
}

export default LandingPage;
