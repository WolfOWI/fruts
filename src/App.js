// React Components
import NavBar from "./components/NavBar/NavBar.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-400 to-green-400">
        {/* Content */}
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-3/5">
          <NavBar />
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
