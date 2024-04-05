// Fruts-custom Line Chart

// Import React Hooks
import { useState, useEffect } from "react";

// Import Chart JS
import { Line } from "react-chartjs-2";

// Import Util Functions
import getFruitHexColors from "../../../utils/getFruitHexColors";
import euroPricesToNum from "../../../utils/euroPricesToNum";

// Chart Options (Setup & Styling)
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
        text: "price",
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

function LineChart(props) {
  // Get colors of fruit for styling
  let fruitHexColors = getFruitHexColors(props.dropdownSelect.name);
  let fruitHexColor = fruitHexColors[0];

  // State to hold the prices from props.dataArr
  const [pricesArr, setPricesArr] = useState([]);

  useEffect(() => {
    // Map props.dataArr to extract the prices
    if (props.dataArr) {
      const newPricesArr = props.dataArr.map((obj) => obj.price);
      const chartData = euroPricesToNum(newPricesArr);
      setPricesArr(chartData);
    }
  }, [props.dataArr]);

  return (
    <div className="p-4 h-72 sm:h-96">
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

export default LineChart;
