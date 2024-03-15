// European Union Commissions Agricultural Data API

// Import Axios
import axios from "axios";

// Base URL for API
const baseURL = "/api?_method=get"; // Adjusted base URL to match the proxy rewrite

const params = new URLSearchParams({
  products: "melons",
  memberStateCodes: "EU",
  months: 6,
  calendarYears: 2014,
}).toString();

const url = `${baseURL}&${params}`;

function getDecadeFruitPrices() {
  console.log(`Making request to: ${url}`);

  axios
    .get(url)
    .then((res) => {
      console.log("Success", res.data);
    })
    .catch((err) => {
      console.log(`EuAgriData Error:`, err);
    });
}

export default getDecadeFruitPrices;
