// Loading State of Polar Chart

// Import Chart JS
import { PolarArea } from "react-chartjs-2";

function LoadingPolarChart() {
  // console.log("Polar graph data reached " + props.fruitData);

  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center rounded-2xl p-4">
      <h3 className="text-base font-head font-bold text-slate-700">Loading...</h3>

      <PolarArea
        data={{
          labels: ["A", "B6", "C", "E", "K"],
          datasets: [
            {
              label: "Percent",
              data: [1, 1, 1, 1, 1],
              backgroundColor: ["#94a3b8"],
            },
          ],
        }}
      />
    </div>
  );
}

export default LoadingPolarChart;
