// Fruts-custom Bar Chart

// IMPORTS
// ----------------------------------
// ChartJS
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// Util Functions
import getFruitHexColors from "../../../utils/getFruitHexColors";
// ----------------------------------

// CHART OPTIONS FUNCTION
// ----------------------------------
// For chart options, setup & styling
function chartOptions(chartName) {
  return {
    elements: {
      bar: {
        inflateAmount: 2,
      },
    },
    aspectRatio: 12 / 2,
    indexAxis: "y",
    scales: {
      x: {
        border: {
          width: 3,
          color: "#e2e8f0",
        },
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 16,
            family: "Work Sans",
          },
          // Include a Euro sign
          callback: function (value) {
            return value + "g";
          },
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.parsed.x} Grams`;
          },
          title: function (context) {
            return `${chartName} in 100g of ${context[0].label}`;
          },
        },
      },
    },
  };
}
// ----------------------------------

// BAR CHART COMPONENT
// ----------------------------------
function BarChart(props) {
  // COLOUR
  // - - - - - - - - - - - - -
  // Get fruit hex color palette based on first dropdown selection
  let fruitHexColors1 = getFruitHexColors(props.dropdownSelect1.name);
  let fruitHexColors2 = getFruitHexColors(props.dropdownSelect2.name);
  // - - - - - - - - - - - - -

  // DATA
  // - - - - - - - - - - - - -
  // Split array in different data (sugar, water, fibre data)
  let fullArr = props.fruitData;
  let sugarData = fullArr.slice(0, 2);
  let waterData = fullArr.slice(2, 4);
  let fibreData = fullArr.slice(4, 6);
  // - - - - - - - - - - - - -

  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center rounded-2xl p-4">
      {/* Bar Chart 1 Title - Sugar */}
      <h3 className="text-xl font-head font-bold text-slate-700 mb-2">
        Sugar
        <span className="text-base font-normal"> (100g)</span>
      </h3>

      {/* Bar Chart 1 Content - Sugar */}
      <Bar
        data={{
          labels: [props.dropdownSelect1.name, props.dropdownSelect2.name],
          datasets: [
            {
              axis: "y",
              data: sugarData,
              backgroundColor: [fruitHexColors1[0], fruitHexColors2[0]],
              borderRadius: 8,
            },
          ],
        }}
        options={chartOptions("Sugar")}
      />

      {/* Bar Chart 2 Title - Water */}
      <h3 className="text-xl font-head font-bold text-slate-700 mt-12 mb-2">
        Water <span className="text-base font-normal"> (100g)</span>
      </h3>
      {/* Bar Chart 2 Content - Water */}
      <Bar
        data={{
          labels: [props.dropdownSelect1.name, props.dropdownSelect2.name],
          datasets: [
            {
              axis: "y",
              data: waterData,
              backgroundColor: [fruitHexColors1[0], fruitHexColors2[0]],
              borderRadius: 8,
            },
          ],
        }}
        options={chartOptions("Water")}
      />
      {/* Bar Chart 3 Title - Fibre */}
      <h3 className="text-xl font-head font-bold text-slate-700 mt-12 mb-2">
        Fibre <span className="text-base font-normal"> (100g)</span>
      </h3>
      {/* Bar Chart 3 Content - Fibre */}
      <Bar
        data={{
          labels: [props.dropdownSelect1.name, props.dropdownSelect2.name],
          datasets: [
            {
              axis: "y",
              data: fibreData,
              backgroundColor: [fruitHexColors1[0], fruitHexColors2[0]],
              borderRadius: 8,
            },
          ],
        }}
        options={chartOptions("Fibre")}
      />
    </div>
  );
}
// ----------------------------------

export default BarChart;
