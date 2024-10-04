// Offline API for European Union Agricultural Data

// Import local JSON data
import applesData from "../data/timelineData/apples_timeline.json";
import kiwisData from "../data/timelineData/kiwis_timeline.json";
import lemonsData from "../data/timelineData/lemons_timeline.json";
import melonsData from "../data/timelineData/melons_timeline.json";
import orangesData from "../data/timelineData/oranges_timeline.json";
import peachesData from "../data/timelineData/peaches_timeline.json";
import pearsData from "../data/timelineData/pears_timeline.json";
import plumsData from "../data/timelineData/plums_timeline.json";
import strawberriesData from "../data/timelineData/strawberries_timeline.json";

// A mapping between fruit names and their corresponding local JSON data
const fruitDataMap = {
  apples: applesData,
  kiwis: kiwisData,
  lemons: lemonsData,
  melons: melonsData,
  oranges: orangesData,
  peaches: peachesData,
  pears: pearsData,
  plums: plumsData,
  strawberries: strawberriesData,
};

// Function to get fruit prices for the past decade
export default function getDecadeFruitPrices(fruit) {
  const data = fruitDataMap[fruit];

  if (!data) {
    throw new Error(`Data not available for ${fruit}`);
  }

  // Filter the data to only return one entry per year
  const filteredData = filterTo1PerYear(filterToSingleVariety(data));
  return Promise.resolve(filteredData); // Simulate a promise to keep consistency
}

// HELPER FUNCTIONS (similar to the previous version)
// -----------------------------------
// Filter array to only a single variety
function filterToSingleVariety(array) {
  return array.filter((obj) => array[0].variety === obj.variety);
}

// Filter array to only 1 object per year (2013-2023)
function filterTo1PerYear(array) {
  let yearArr = [];

  for (let y = 2013; y <= 2023; y++) {
    let yearObj = array.find((obj) => obj.beginDate.includes(y));

    // If yearObj is not found (undefined), set price to 0 euros.
    yearObj ? yearArr.push(yearObj) : yearArr.push({ price: "€0.00" });
  }
  return yearArr;
}
// -----------------------------------
