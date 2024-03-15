// European Union Commissions Agricultural Data API

// Import Axios
import axios from "axios";

// VARIABLES
// -------------------
// Proxy Url for bypassing CORS errors
const proxyURL = "https://cors-proxy.htmldriven.com/?url=";

// Base URL for API
const baseURL = "https://ec.europa.eu/agrifood/api/fruitAndVegetable/prices?";
// -------------------

function getDecadeFruitPrices(fruitName) {
  let priceData = null;

  axios
    .get(`${proxyURL}${baseURL}products=melons&memberStateCodes=EU&months=6&calendarYears=2014`)
    .then((res) => {
      priceData = res;
      console.log(
        `${proxyURL}${baseURL}products=melons&memberStateCodes=EU&months=6&calendarYears=2014`
      );
    })
    .catch((err) => {
      console.log(`EuAgriData Error: ${err}`);
      console.log(
        `${proxyURL}${baseURL}products=melons&memberStateCodes=EU&months=6&calendarYears=2014`
      );
    });

  return priceData;
}

export default getDecadeFruitPrices;
