// Edamam API (Fruit Nutritional information)

// IMPORTS
// ----------------------------------
// Axios (for API calls)
import axios from "axios";
// ----------------------------------

// URLs FOR API CALLS
// ----------------------------------
// App ID & key
const appId = process.env.REACT_APP_EDAMAM_APP_ID;
const appKey = process.env.REACT_APP_EDAMAM_APP_KEY;

// Base Urls for GET
const baseGetUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&app_key=${appKey}`;

// Base Urls for POST
const basePostUrl = `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${appId}&app_key=${appKey}`;
// ----------------------------------

// CALL 1: GET FRUIT ID
// ----------------------------------
export function getApiFruitID(fruit) {
  console.log("Making the GET fruit API call");
  // The get url
  const url = `${baseGetUrl}&ingr=${fruit}`;
  console.log(url);

  return axios
    .get(url)
    .then((res) => {
      return res.data.parsed[0].food.foodId;
    })
    .catch((err) => {
      console.log(`Edamam ID Fetching Error:`, err);
      throw err;
    });
}
// ----------------------------------

// CALL 2: POST FRUIT ID FOR ADDITIONAL FRUIT INFO
// ----------------------------------
export function postFruitInfo(fruitApiID) {
  console.log("Making the POST fruit API call");
  const dataToPost = {
    ingredients: [
      {
        quantity: 100,
        measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
        foodId: fruitApiID,
      },
    ],
  };

  return axios
    .post(basePostUrl, dataToPost)
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(`Edamam Posting Fruit Error:`, err);
      throw err;
    });
}
// ----------------------------------
