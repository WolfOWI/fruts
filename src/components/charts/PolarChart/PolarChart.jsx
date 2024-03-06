// Fruts-custom Donut Chart
import { Chart as ChartJS } from "chart.js/auto";
import { PolarArea } from "react-chartjs-2";

function PolarChart() {
  return (
    <div className="bg-slate-50 flex flex-col justify-center items-center rounded-2xl p-4">
      <h3 className="text-base font-head font-bold text-slate-700">Vitamins</h3>

      <PolarArea
        data={{
          labels: ["A", "B6", "C", "E", "K"],
          datasets: [
            {
              label: "Stock Price",
              data: [6434, 6350, 6467, 4383, 3232],
              //   backgroundColor: ["#3b82f6", "#93c5fd", "#dbeafe"],
            },
          ],
        }}
      />
    </div>
  );
}

export default PolarChart;
