// Import Components (General)
import NavBar from "../NavBar/NavBar.jsx";
import TimelineHeader from "./TimelineComponents/TimelineHeader.jsx";
import LineChart from "../charts/LineChart/LineChart.jsx";
import Footer from "../Footer/Footer.jsx";

function TimelinePage() {
  return (
    <div className="bg-slate-50">
      {/* Header / Hero */}
      <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-b-3xl">
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
          <NavBar />
          <TimelineHeader />
        </div>
      </div>
      {/* Body */}
      <div className="">
        {/* Content */}
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6 pt-5 pb-20">
          {/* Line Chart */}
          <div className="w-full">
            <LineChart />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-t-3xl">
          <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelinePage;
