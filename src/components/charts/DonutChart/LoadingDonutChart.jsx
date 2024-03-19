// LOADING State of Donut Chart

// Import Chart JS
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function LoadingDonutChart() {
  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center rounded-2xl p-4">
      <h3 className="text-base font-head font-bold text-slate-700">Loading...</h3>

      <Doughnut
        data={{
          labels: ["Carbs", "Protein", "Fat"],
          datasets: [
            {
              label: "Grams",
              data: [1, 1, 1],
              backgroundColor: ["#94a3b8"],
            },
          ],
        }}
      />
    </div>
  );
}

export default LoadingDonutChart;
