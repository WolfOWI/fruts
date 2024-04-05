// Fruts-custom Donut Chart

// Import Chart JS
import { Doughnut } from "react-chartjs-2";

// Import Util Function
import getFruitHexColors from "../../../utils/getFruitHexColors";

// Chart Options (Styling & Setup)
const options = {
  elements: {
    arc: {
      borderColor: "#f1f5f9",
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.parsed} Grams`;
        },
      },
    },
  },
};

function DonutChart(props) {
  // Get fruit hex color palette based on prop passed
  let fruitHexColors = getFruitHexColors(props.dropdownSelect.name);

  return (
    <div className="relative bg-slate-100 flex flex-col justify-center items-center rounded-2xl p-4">
      <h3 className="text-xl font-head font-bold text-slate-700 mb-2">
        Composition <span className="text-base font-normal"> (100g)</span>
      </h3>

      {/* Donut Chart */}
      <Doughnut
        data={{
          labels: ["Carbs", "Protein", "Fat"],
          datasets: [
            {
              label: "Grams",
              data: [props.fruitData[0], props.fruitData[1], props.fruitData[2]],
              backgroundColor: [fruitHexColors[0], fruitHexColors[2], fruitHexColors[4]],
            },
          ],
        }}
        options={options}
      />
      <div className="absolute flex flex-col items-center mt-[8%] sm:mt-[4%] md:mt-[35%] min-[1357px]:mt-[15%] lg:mt-[32%] xl:mt-[24%] 2xl:mt-[12%]">
        <h4 className="flex md:hidden xl:flex text-[600%] mb-[-30px] sm:text-[800%] sm:mb-[-40px] md:text-[200%] md:mb-[0] xl:text-[300%] xl:mb-[-15px] font-head font-bold text-slate-700 ">
          {props.fruitData[3]}
        </h4>
        <h4 className="text-base font-head font-bold text-slate-500 flex md:hidden xl:flex">
          Calories
        </h4>
      </div>
    </div>
  );
}

export default DonutChart;
