// European Union Commissions Agricultural Data API

// Import Axios
import axios from "axios";

// GET FRUIT PRICES FROM API
// ----------------------------------
export default function getDecadeFruitPrices(fruit) {
  // URL & PARAMETERS
  // - - - - - - - - - - -
  // Check if the app is running in development or production
  const isDevelopment = process.env.NODE_ENV === "development";

  // Base URL for API calls
  const baseURL = isDevelopment
    ? "/api?_method=get" // Local proxy for development
    : "https://ec.europa.eu/agrifood/api/fruitAndVegetable/prices?_method=get"; // Direct API URL for production
  // PLEASE NOTE PRODUCTION URL DOES NOT WORK DUE TO LACK OF CORS HEADERS.

  // Parameters
  const params = new URLSearchParams({
    products: fruit,
    memberStateCodes: "EU",
    months: 6,
    calendarYears: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  }).toString();

  // The complete url
  const url = `${baseURL}&${params}`;
  // - - - - - - - - - - -

  return axios
    .get(url)
    .then((res) => {
      const filteredData = filterTo1PerYear(filterToSingleVariety(res.data));
      return filteredData;
    })
    .catch((err) => {
      console.log(`EuAgriData Error:`, err);
      throw err;
    });
}
// ----------------------------------

// HELPER FUNCTIONS
// -----------------------------------
// Filter array to only a single variety
function filterToSingleVariety(array) {
  let filteredArr = array.filter((obj) => array[0].variety === obj.variety);
  return filteredArr;
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
