// LOADING STATE of Bar Chart

// Import ChartJS
import { Bar } from "react-chartjs-2";

function LoadingBarChart(props) {
  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center rounded-2xl p-4">
      <h3 className="text-base font-head font-bold text-slate-700">Loading...</h3>

      <Bar
        data={{
          labels: ["loading", "loading"],
          datasets: [
            {
              axis: "y",
              data: [1, 1],
              backgroundColor: ["#94a3b8"],
            },
          ],
        }}
        options={{
          aspectRatio: 10 / 2,
          indexAxis: "y",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
      <h3 className="text-base font-head font-bold text-slate-700 mt-5">Loading...</h3>
      <Bar
        data={{
          labels: ["loading", "loading"],
          datasets: [
            {
              axis: "y",
              data: [1, 1],
              backgroundColor: ["#94a3b8"],
            },
          ],
        }}
        options={{
          aspectRatio: 10 / 2,
          indexAxis: "y",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
      <h3 className="text-base font-head font-bold text-slate-700 mt-5">Loading...</h3>
      <Bar
        data={{
          labels: ["loading", "loading"],
          datasets: [
            {
              axis: "y",
              data: [1, 1],
              backgroundColor: ["#94a3b8"],
            },
          ],
        }}
        options={{
          aspectRatio: 10 / 2,
          indexAxis: "y",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default LoadingBarChart;
