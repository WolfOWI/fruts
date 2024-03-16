// Fruts-custom Line Chart

// Import React Hooks
import { useState, useEffect } from "react";

// Import Chart JS
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

// Import Util Functions
import getFruitHexColors from "../../../utils/getFruitHexColors";
import euroPricesToNum from "../../../utils/euroPricesToNum";

function LineChart(props) {
  // Fruit name (passed through as a prop)
  let fruitName = props.dropdownSelect.name;

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
              label: `Price per ${fruitName}`,
              data: pricesArr, // Dynamically based on pricesArr state
              tension: 0.4,
              pointHoverRadius: 8,
              borderColor: fruitHexColor,
              backgroundColor: fruitHexColor,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
