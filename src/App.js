// Import Components (General)
import NavBar from "./components/NavBar/NavBar.jsx";
import Header from "./components/Header/Header.jsx";

// Import Components (Landing Page)
import FruitTypeCard from "./components/pages/landing/FruitTypeCard/FruitTypeCard.jsx";

function App() {
  return (
    <div className="bg-slate-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-b-3xl">
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
          <NavBar />
          <Header />
        </div>
      </div>
      {/* Body Section */}
      <div className="mt-24 flex flex-col items-center m-auto w-11/12 sm:w-4/5 lg:w-4/6">
        <h2 className="font-head font-bold text-2xl">our fruit types</h2>
        <p className="text-base font-body">
          A quick glance at what makes these natural delights so special.
        </p>
        {/* Fruit Type Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-3">
          <FruitTypeCard fruit="apple" />
          <FruitTypeCard fruit="kiwi" />
          <FruitTypeCard fruit="lemon" />
          <FruitTypeCard fruit="orange" />
          <FruitTypeCard fruit="peach" />
          <FruitTypeCard fruit="pear" />
          <FruitTypeCard fruit="plum" />
          <FruitTypeCard fruit="strawberry" />
          <FruitTypeCard fruit="watermelon" />
        </div>
      </div>
    </div>
  );
}

export default App;
