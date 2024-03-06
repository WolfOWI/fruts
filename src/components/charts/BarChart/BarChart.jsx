// Fruts-custom Bar Chart
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart() {
  return (
    <div className="bg-slate-50 flex flex-col justify-center items-center rounded-2xl p-4">
      <h3 className="text-base font-head font-bold text-slate-700">General Contents</h3>

      <Bar
        data={{
          labels: ["Sugar", "Water", "Fibre"],
          datasets: [
            {
              label: "Apple",
              data: [6434, 1350, 6467],
              //   backgroundColor: ["#3b82f6", "#93c5fd", "#dbeafe"],
            },
            {
              label: "Kiwi",
              data: [3234, 6545, 4432],
              //   backgroundColor: ["#3b82f6", "#93c5fd", "#dbeafe"],
            },
          ],
        }}
      />
    </div>
  );
}

export default BarChart;
