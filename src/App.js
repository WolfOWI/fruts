// React Components
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-400 to-green-400">
      {/* Content Section */}
      <div className="sm:mx-20">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
