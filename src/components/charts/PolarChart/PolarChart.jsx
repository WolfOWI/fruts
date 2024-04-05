// Fruts-custom Polar Chart

// IMPORTS
// ----------------------------------
// Util Function
import getFruitHexColors from "../../../utils/getFruitHexColors";
// Chart JS
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// ----------------------------------

// CHART OPTIONS
// ----------------------------------
const options = {
  elements: {
    arc: {
      borderColor: "#f1f5f9",
      borderJoinStyle: "round",
      angle: 60,
    },
  },
  scales: {
    r: {
      grid: {
        color: "#e2e8f0",
        lineWidth: 3,
      },
      ticks: {
        backdropColor: "#f1f5f9",
        color: "#64748b",
        // Include a % sign
        callback: function (value) {
          return value + "%";
        },
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.parsed.r}% Daily Intake`;
        },
        title: function (context) {
          return `Vitamin ${context[0].label}`;
        },
      },
    },
  },
};
// ----------------------------------

// POLAR CHART COMPONENT
// ----------------------------------
function PolarChart(props) {
  // COLOUR
  // - - - - - - - - - - - - -
  // Get fruit hex color palette based on prop passed
  let fruitHexColors = getFruitHexColors(props.dropdownSelect.name);
  // - - - - - - - - - - - - -

  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center rounded-2xl p-4">
      {/* Chart Title */}
      <h3 className="text-xl font-head font-bold text-slate-700 mb-2">
        Vitamin Daily <span className="text-base font-normal"> (%)</span>
      </h3>

      {/* Chart Content */}
      <PolarArea
        data={{
          labels: ["A", "B6", "C", "E", "K"],
          datasets: [
            {
              label: "Percent",
              data: props.fruitData,
              backgroundColor: [
                fruitHexColors[0],
                fruitHexColors[1],
                fruitHexColors[2],
                fruitHexColors[3],
                fruitHexColors[4],
              ],
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}
// ----------------------------------

export default PolarChart;
