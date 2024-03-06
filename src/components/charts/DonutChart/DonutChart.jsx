// Fruts-custom Donut Chart
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function DonutChart() {
  return (
    <div className="bg-slate-50 flex flex-col justify-center items-center rounded-2xl p-4">
      <h3 className="text-lg font-head font-bold text-slate-700">Caloric Composition</h3>

      <Doughnut
        data={{
          labels: ["Fat", "Protein", "Carbs"],
          datasets: [
            {
              label: "Stock Price",
              data: [6434, 6350, 6467],
              backgroundColor: ["#3b82f6", "#93c5fd", "#dbeafe"],
            },
          ],
        }}
      />
    </div>
  );
}

export default DonutChart;
