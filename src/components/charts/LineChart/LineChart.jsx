// Fruts-custom Line Chart

// Import Chart JS
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

// Import Util Functions
import get1FruitHexColor from "../../../utils/get1FruitHexColor";

function LineChart(props) {
  let fruitName = props.dropdownSelect.name;
  let fruitHexColor = get1FruitHexColor(props.dropdownSelect.name);
  console.log(fruitName);
  console.log(fruitHexColor);

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
              label: `${fruitName}s sold`,
              data: [6434, 1350, 6467, 3283, 3283, 1223, 3213, 4834, 1233, 3333, 8233],
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
