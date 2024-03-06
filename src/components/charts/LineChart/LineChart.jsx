// Fruts-custom Line Chart
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart() {
  return (
    <div className="bg-slate-50 flex flex-col justify-center items-center rounded-2xl p-4">
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
              label: "Apple",
              data: [6434, 1350, 6467, 3283, 3283, 1223, 3213, 4834, 1233, 3333, 8233],
              //   backgroundColor: ["#3b82f6", "#93c5fd", "#dbeafe"],
            },
          ],
        }}
      />
    </div>
  );
}

export default LineChart;
