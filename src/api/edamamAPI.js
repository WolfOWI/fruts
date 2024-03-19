// Edamam API (Fruit Nutritional information)

// Import Axios
import axios from "axios";

// Urls for API:
// -----------------
// App ID & key
const appId = "d15c3f0b";
const appKey = "914f5205bf207f61da61c4697f85ad9b";

// Base Urls for GET
const baseGetUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&app_key=${appKey}`;

// Base Urls for POST
const basePostUrl = `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${appId}&app_key=${appKey}`;
// -----------------

// STEP 1: Get fruit api ID
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

// STEP 2: Post fruit ID to get information about fruit
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
      return res.data;
    })
    .catch((err) => {
      console.log(`Edamam Posting Fruit Error:`, err);
      throw err;
    });
}
// HELPER FUNCTIONS
// -----------------------------------

// -----------------------------------
