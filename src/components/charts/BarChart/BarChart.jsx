// Fruts-custom Bar Chart

// Import ChartJS
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

// Import Util Function
import getFruitHexColors from "../../../utils/getFruitHexColors";

function BarChart(props) {
  // Get fruit hex color palette based on first dropdown selection
  let fruitHexColors1 = getFruitHexColors(props.dropdownSelect1.name);
  let fruitHexColors2 = getFruitHexColors(props.dropdownSelect2.name);

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
              backgroundColor: fruitHexColors1[0],
            },
            {
              label: "Kiwi",
              data: [3234, 6545, 4432],
              backgroundColor: fruitHexColors2[0],
            },
          ],
        }}
      />
    </div>
  );
}

export default BarChart;
