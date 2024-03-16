// European Union Commissions Agricultural Data API

// Import Axios
import axios from "axios";

export default function getDecadeFruitPrices(fruit) {
  // Base URL for API
  const baseURL = "/api?_method=get"; // Adjusted base URL to match the proxy rewrite

  // Parameters for URL
  const params = new URLSearchParams({
    products: fruit,
    memberStateCodes: "EU",
    months: 6,
    calendarYears: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  }).toString();

  // The complete url
  const url = `${baseURL}&${params}`;

  console.log(`Making request to: ${url}`);

  axios
    .get(url)
    .then((res) => {
      console.log("Response Array: ");
      console.log(res.data);

      console.log("Filtered Array: ");
      console.log(filterTo1PerYear(filterToSingleVariety(res.data)));
    })
    .catch((err) => {
      console.log(`EuAgriData Error:`, err);
    });
}

// HELPER FUNCTIONS
// -----------------------------------
// Filter array to only a single variety
function filterToSingleVariety(array) {
  return array.filter((obj) => array[0].variety === obj.variety);
}

// Filter array to only 1 object per year (2013-2023)
function filterTo1PerYear(array) {
  let yearArr = [];

  // For all years between 2013-2023
  for (let y = 2013; y <= 2023; y++) {
    let yearObj = array.find((obj) => obj.beginDate.includes(y));

    // If yearObj is not found (undefined), set price to 0 euros.
    yearObj ? yearArr.push(yearObj) : yearArr.push({ price: "€0.00" });
  }
  return yearArr;
}
// -----------------------------------
