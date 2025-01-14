// Fruts Landing Page

// IMPORTS
// ----------------------------------
// Components (General)
import NavBar from "../NavBar/NavBar.jsx";
import LandingHeader from "./LandingComponents/LandingHeader.jsx";
import Footer from "../Footer/Footer.jsx";
// Components (Landing Page Specific)
import FruitTypeCard from "./LandingComponents/FruitTypeCard/FruitTypeCard.jsx";
import DataExplainedCard from "./LandingComponents/DataExplainedCard/DataExplainedCard.jsx";
// ----------------------------------

// LANDING PAGE COMPONENT
// ----------------------------------
function LandingPage() {
  return (
    <div className="bg-slate-50">
      {/* Navigation & Header */}
      <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-b-3xl">
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
          <NavBar />
          <LandingHeader />
        </div>
      </div>
      {/* Body */}
      <div className="flex flex-col items-center m-auto w-11/12 sm:w-4/5 lg:w-4/6">
        {/* Fruit Types */}
        <div className="mt-24 flex flex-col items-center">
          <h2 className="font-head font-bold text-3xl text-center mb-1">our fruit types</h2>
          <p className="text-base font-body text-center">
            A quick glance at what makes these natural delights so special.
          </p>
          {/* Fruit Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-4">
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
        {/* Our Data Section */}
        <div className="my-24 flex flex-col items-center">
          <h2 className="font-head font-bold text-3xl text-center mb-1">our data</h2>
          <p className="text-lg font-body text-center">
            Pit two fruits against each other or explore the historical pricing over the years.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-4 w-full">
            <div className="mr-1">
              <DataExplainedCard about="calories" />
              <DataExplainedCard about="sugars" />
            </div>

            <div className="ml-1">
              <DataExplainedCard about="vitamins" />
              <DataExplainedCard about="prices" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-t-3xl">
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
          <Footer />
        </div>
      </div>
    </div>
  );
}
// ----------------------------------

export default LandingPage;
