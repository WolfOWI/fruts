// Fruts-custom Line Chart

// IMPORTS
// ----------------------------------
// Import Chart JS
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// React Hooks
import { useState, useEffect } from "react";
// Util Functions
import getFruitHexColors from "../../../utils/getFruitHexColors";
import euroPricesToNum from "../../../utils/euroPricesToNum";
// ----------------------------------

// CHART OPTIONS
// ----------------------------------
const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}: €${context.parsed.y}`;
        },
      },
    },
  },
  scales: {
    x: {
      border: {
        color: "#cbd5e1",
        width: 3,
      },
      grid: {
        display: false,
      },
      display: true,
      title: {
        display: true,
        text: "year",
        font: {
          size: 20,
          family: "Quicksand",
          weight: "bold",
        },
      },
      ticks: {
        font: {
          size: 16,
          family: "Work Sans",
        },
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        lineWidth: 3,
        color: "#f1f5f9",
      },
      display: true,
      title: {
        display: true,
        text: "price (100kg)",
        font: {
          size: 20,
          family: "Quicksand",
          weight: "bold",
        },
      },
      ticks: {
        font: {
          size: 16,
          family: "Work Sans",
        },
        // Include a Euro sign
        callback: function (value) {
          return "€" + value;
        },
      },
    },
  },
};
// ----------------------------------

// LINE CHART COMPONENT
// ----------------------------------
function LineChart(props) {
  // COLOUR
  // - - - - - - - - - - - - -
  // Get colors of fruit for styling
  let fruitHexColors = getFruitHexColors(props.dropdownSelect.name);
  let fruitHexColor = fruitHexColors[0];
  // - - - - - - - - - - - - -

  // STATE
  // - - - - - - - - - - - - -
  // Hold price values from props.dataArr
  const [pricesArr, setPricesArr] = useState([]);
  // - - - - - - - - - - - - -

  // EFFECT
  // - - - - - - - - - - - - -
  // When data changes
  useEffect(() => {
    // Map props.dataArr properties & extract the prices
    if (props.dataArr) {
      const newPricesArr = props.dataArr.map((obj) => obj.price);
      const chartData = euroPricesToNum(newPricesArr);
      setPricesArr(chartData);
    }
  }, [props.dataArr]);
  // - - - - - - - - - - - - -

  return (
    <div className="p-4 h-72 sm:h-96">
      {/* Line Chart Content */}
      <Line
        data={{
          labels: [
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
          ],
          datasets: [
            {
              label: `Euros`,
              data: pricesArr,
              tension: 0.4,
              pointHoverRadius: 8,
              borderColor: fruitHexColor,
              backgroundColor: fruitHexColor,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}
// ----------------------------------

export default LineChart;
