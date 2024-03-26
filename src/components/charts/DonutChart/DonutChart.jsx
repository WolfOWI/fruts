// Fruts-custom Donut Chart

// Import Chart JS
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

// Import Util Function
import getFruitHexColors from "../../../utils/getFruitHexColors";

function DonutChart(props) {
  // Get fruit hex color palette based on prop passed
  let fruitHexColors = getFruitHexColors(props.dropdownSelect.name);

  // console.log("Donut Data reached" + props.fruitData);

  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center rounded-2xl p-4">
      <h3 className="text-base font-head font-bold text-slate-700">Caloric Composition</h3>

      <Doughnut
        data={{
          labels: ["Carbs", "Protein", "Fat"],
          datasets: [
            {
              label: "Grams",
              data: props.fruitData,
              backgroundColor: [fruitHexColors[0], fruitHexColors[2], fruitHexColors[4]],
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.parsed} Grams`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

export default DonutChart;
