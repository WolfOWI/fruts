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

  // console.log("Bar Data: " + props.fruitData);

  // Split array in different data
  let fullArr = props.fruitData;
  // console.log("Full Arr:  " + fullArr);

  let sugarData = fullArr.slice(0, 2);
  // console.log("Data 1:  " + sugarData);

  let waterData = fullArr.slice(2, 4);
  // console.log("Data 2:  " + waterData);

  let fibreData = fullArr.slice(4, 6);
  // console.log("Data 2:  " + fibreData);

  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center rounded-2xl p-4">
      <h3 className="text-base font-head font-bold text-slate-700">Sugar</h3>

      <Bar
        data={{
          labels: [props.dropdownSelect1.name, props.dropdownSelect2.name],
          datasets: [
            {
              axis: "y",
              data: sugarData,
              backgroundColor: [fruitHexColors1[0], fruitHexColors2[0]],
            },
          ],
        }}
        options={{
          aspectRatio: 10 / 2,
          indexAxis: "y",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
      <h3 className="text-base font-head font-bold text-slate-700 mt-5">Water</h3>
      <Bar
        data={{
          labels: [props.dropdownSelect1.name, props.dropdownSelect2.name],
          datasets: [
            {
              axis: "y",
              data: waterData,
              backgroundColor: [fruitHexColors1[0], fruitHexColors2[0]],
            },
          ],
        }}
        options={{
          aspectRatio: 10 / 2,
          indexAxis: "y",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
      <h3 className="text-base font-head font-bold text-slate-700 mt-5">Fibre</h3>
      <Bar
        data={{
          labels: [props.dropdownSelect1.name, props.dropdownSelect2.name],
          datasets: [
            {
              axis: "y",
              data: fibreData,
              backgroundColor: [fruitHexColors1[0], fruitHexColors2[0]],
            },
          ],
        }}
        options={{
          aspectRatio: 10 / 2,
          indexAxis: "y",
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

export default BarChart;
