// Import Components (General)
import NavBar from "../NavBar/NavBar.jsx";
import CompareHeader from "./CompareComponents/CompareHeader.jsx";
import DonutChart from "../charts/DonutChart/DonutChart.jsx";
import PolarChart from "../charts/PolarChart/PolarChart.jsx";
import BarChart from "../charts/BarChart/BarChart.jsx";
import Footer from "../Footer/Footer.jsx";

function ComparePage() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-green-200">
      {/* Header / Hero */}
      <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-b-3xl">
        {/* Content */}
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
          <NavBar />
          <CompareHeader />
        </div>
      </div>
      {/* Content */}
      <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6 pt-5 pb-20">
        {/* Caloric Composition */}
        <div className="flex flex-col md:flex-row justify-center">
          {/* Left Side */}
          <div className="w-full md:w-2/6">
            <DonutChart />
          </div>
          {/* Ride Side */}
          <div className="w-full md:w-2/6 md:ml-3 mt-5 md:mt-0">
            <DonutChart />
          </div>
        </div>
        {/* Vitamins */}
        <div className="flex flex-col md:flex-row justify-center mt-16 md:mt-3">
          {/* Left Side */}
          <div className="w-full md:w-2/6">
            <PolarChart />
          </div>
          {/* Ride Side */}
          <div className="w-full md:w-2/6 md:ml-3 mt-5 md:mt-0">
            <PolarChart />
          </div>
        </div>
        {/* Sugar, Water & Fibre */}
        <div className="flex flex-col md:flex-row justify-center mt-16 md:mt-3">
          {/* Ride Side */}
          <div className="w-full md:w-[68%] mt-5 md:mt-0">
            <BarChart />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-t-3xl">
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ComparePage;
