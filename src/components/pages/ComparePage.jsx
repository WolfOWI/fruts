// Compare Page

// Import React Hooks
import { useState, useEffect } from "react";

// Import Util functions
import get2FruitGradient from "../../utils/get2FruitGradient.js";
import generateRandomNum from "../../utils/generateRandomNum.js";

// Import API functions
import { getApiFruitID, postFruitInfo } from "../../api/edamamAPI.js";

// Import Components
import NavBar from "../NavBar/NavBar.jsx";
import CompareHeader from "./CompareComponents/CompareHeader.jsx";
import DonutChart from "../charts/DonutChart/DonutChart.jsx";
import LoadingDonutChart from "../charts/DonutChart/LoadingDonutChart.jsx";
import PolarChart from "../charts/PolarChart/PolarChart.jsx";
import LoadingPolarChart from "../charts/PolarChart/LoadingPolarChart.jsx";
import BarChart from "../charts/BarChart/BarChart.jsx";
import LoadingBarChart from "../charts/BarChart/LoadingBarChart.jsx";
import Footer from "../Footer/Footer.jsx";

// Fruit Imagery
import appleFull from "../../assets/img/fruits/apple.png";
import appleCut from "../../assets/img/fruits/apple_cut.png";
import kiwiFull from "../../assets/img/fruits/kiwi.png";
import kiwiCut from "../../assets/img/fruits/kiwi_cut.png";
import lemonFull from "../../assets/img/fruits/lemon.png";
import lemonCut from "../../assets/img/fruits/lemon_cut.png";
import orangeFull from "../../assets/img/fruits/orange.png";
import orangeCut from "../../assets/img/fruits/orange_cut.png";
import peachFull from "../../assets/img/fruits/peach.png";
import peachCut from "../../assets/img/fruits/peach_cut.png";
import pearFull from "../../assets/img/fruits/pear.png";
import pearCut from "../../assets/img/fruits/pear_cut.png";
import plumFull from "../../assets/img/fruits/plum.png";
import plumCut from "../../assets/img/fruits/plum_cut.png";
import berryFull from "../../assets/img/fruits/berry.png";
import berryCut from "../../assets/img/fruits/berry_cut.png";
import melonFull from "../../assets/img/fruits/melon.png";
import melonCut from "../../assets/img/fruits/melon_cut.png";

// Fruit Options (array of objects)
const fruitsList = [
  {
    id: 1,
    name: "apple",
    imgSrcFull: appleFull,
    imgSrcCut: appleCut,
    hoverColor: "hover:bg-blue-100",
  },
  {
    id: 2,
    name: "kiwi",
    imgSrcFull: kiwiFull,
    imgSrcCut: kiwiCut,
    hoverColor: "hover:bg-lime-100",
  },
  {
    id: 3,
    name: "lemon",
    imgSrcFull: lemonFull,
    imgSrcCut: lemonCut,
    hoverColor: "hover:bg-yellow-100",
  },
  {
    id: 4,
    name: "orange",
    imgSrcFull: orangeFull,
    imgSrcCut: orangeCut,
    hoverColor: "hover:bg-orange-100",
  },
  {
    id: 5,
    name: "peach",
    imgSrcFull: peachFull,
    imgSrcCut: peachCut,
    hoverColor: "hover:bg-rose-100",
  },
  {
    id: 6,
    name: "pear",
    imgSrcFull: pearFull,
    imgSrcCut: pearCut,
    hoverColor: "hover:bg-pink-100",
  },
  {
    id: 7,
    name: "plum",
    imgSrcFull: plumFull,
    imgSrcCut: plumCut,
    hoverColor: "hover:bg-violet-100",
  },
  {
    id: 8,
    name: "strawberry",
    imgSrcFull: berryFull,
    imgSrcCut: berryCut,
    hoverColor: "hover:bg-red-100",
  },
  {
    id: 9,
    name: "melon",
    imgSrcFull: melonFull,
    imgSrcCut: melonCut,
    hoverColor: "hover:bg-green-100",
  },
];

// Generate 2 different random numbers
let rdmNum1 = generateRandomNum(9);
let rdmNum2 = generateRandomNum(9);
while (rdmNum1 === rdmNum2) {
  // (regenerate if the same)
  rdmNum2 = generateRandomNum(9);
}

function ComparePage() {
  // States for fruit dropdowns
  const [selectedFruit1, setSelectedFruit1] = useState(fruitsList[rdmNum1]);
  const [selectedFruit2, setSelectedFruit2] = useState(fruitsList[rdmNum2]);

  // States for graphs
  const [carProFatCal1, setCarProFatCal1] = useState([]); //Donut 1 (left) (fat, protein, carbs, calories)
  const [carProFatCal2, setCarProFatCal2] = useState([]); //Donut 2 (right) (fat, protein, carbs, calories)
  const [vitAtoK1, setVitAtoK1] = useState([]); //Polar 1 (left) (Vit A, B6, C, E, K)
  const [vitAtoK2, setVitAtoK2] = useState([]); //Polar 2 (right) (Vit A, B6, C, E, K)
  const [suWaFi, setSuWaFi] = useState([]); //Bar graph (sugar, water, fibre)

  // Loading States
  const [isLoadingDonut1, setIsLoadingDonut1] = useState(true); //Donut 1 (left) loading state
  const [isLoadingDonut2, setIsLoadingDonut2] = useState(true); //Donut 2 (right) loading state
  const [isLoadingPolar1, setIsLoadingPolar1] = useState(true); //Polar 1 (left) loading state
  const [isLoadingPolar2, setIsLoadingPolar2] = useState(true); //Polar 2 (right) loading state
  const [isLoadingBar, setIsLoadingBar] = useState(true); //Bar graph loading state

  // State for fruitID initialisation (from api)
  const [idsInitialised, setIdsInitialised] = useState(false);

  // Initialise fruit ids (from api)
  useEffect(() => {
    async function initialiseFruitIds() {
      // If Ids don't exist already
      if (!sessionStorage.getItem("storedFruitIds")) {
        const fruitIds = await Promise.all(
          fruitsList.map(async (fruit) => {
            const apiId = await getApiFruitID(fruit.name);
            const fName = fruit.name;

            return { name: fName, id: apiId };
          })
        );
        // Store the IDs
        sessionStorage.setItem("storedFruitIds", JSON.stringify(fruitIds));
        setIdsInitialised(true);
      } else {
        setIdsInitialised(true);
      }
    }
    initialiseFruitIds();
  }, []);

  // Dropdown 1 Change or FruitIDs initialised
  useEffect(() => {
    if (idsInitialised) {
      async function fetchFruitInfo() {
        // Stored fruit IDs
        const storedFruitIds = sessionStorage.getItem("storedFruitIds");

        // If storedFruitIds exist
        if (storedFruitIds) {
          const storedFruitIdsArray = JSON.parse(storedFruitIds);

          // Find storedFruit object based on dropdown
          const storedFruitObject = storedFruitIdsArray.find(
            (fruit) => fruit.name === selectedFruit1.name
          );

          try {
            const res = await postFruitInfo(storedFruitObject.id);
            // console.log(res);
            setCarProFatCal1([
              res.totalNutrients.CHOCDF.quantity,
              res.totalNutrients.PROCNT.quantity,
              res.totalNutrients.FAT.quantity,
              res.totalNutrients.ENERC_KCAL.quantity,
            ]);

            setVitAtoK1([
              Math.round(res.totalDaily.VITA_RAE.quantity),
              Math.round(res.totalDaily.VITB6A.quantity),
              Math.round(res.totalDaily.VITC.quantity),
              Math.round(res.totalDaily.TOCPHA.quantity),
              Math.round(res.totalDaily.VITK1.quantity),
            ]);

            setIsLoadingDonut1(false);
            setIsLoadingPolar1(false);
          } catch (err) {
            console.log("EdamamAPI - Unable to POST fruitID 1: " + err);
          }
        }
      }
      fetchFruitInfo();
    }
  }, [selectedFruit1, idsInitialised]);

  // Dropdown 2 Change or FruitIDs initialised
  useEffect(() => {
    if (idsInitialised) {
      async function fetchFruitInfo() {
        // Stored fruit IDs
        const storedFruitIds = sessionStorage.getItem("storedFruitIds");

        // If storedFruitIds exist
        if (storedFruitIds) {
          const storedFruitIdsArray = JSON.parse(storedFruitIds);

          // Find storedFruit object based on dropdown
          const storedFruitObject = storedFruitIdsArray.find(
            (fruit) => fruit.name === selectedFruit2.name
          );

          try {
            const res = await postFruitInfo(storedFruitObject.id);
            // console.log(res);
            setCarProFatCal2([
              res.totalNutrients.CHOCDF.quantity,
              res.totalNutrients.PROCNT.quantity,
              res.totalNutrients.FAT.quantity,
              res.totalNutrients.ENERC_KCAL.quantity,
            ]);

            setVitAtoK2([
              Math.round(res.totalDaily.VITA_RAE.quantity),
              Math.round(res.totalDaily.VITB6A.quantity),
              Math.round(res.totalDaily.VITC.quantity),
              Math.round(res.totalDaily.TOCPHA.quantity),
              Math.round(res.totalDaily.VITK1.quantity),
            ]);

            setIsLoadingDonut2(false);
            setIsLoadingPolar2(false);
          } catch (err) {
            console.log("EdamamAPI - Unable to POST fruitID 2: " + err);
          }
        }
      }
      fetchFruitInfo();
    }
  }, [selectedFruit2, idsInitialised]);

  // When Dropdown 1 OR 2 changes OR FruitIDs initialised
  useEffect(() => {
    if (idsInitialised) {
      async function fetchFruitInfo() {
        // Stored fruit IDs
        const storedFruitIds = sessionStorage.getItem("storedFruitIds");

        // If storedFruitIds exist
        if (storedFruitIds) {
          const storedFruitIdsArray = JSON.parse(storedFruitIds);

          // Find LEFT storedFruit object 1 based on dropdown
          const storedFruitObject1 = storedFruitIdsArray.find(
            (fruit) => fruit.name === selectedFruit1.name
          );

          // Find RIGHT storedFruit object 1 based on dropdown
          const storedFruitObject2 = storedFruitIdsArray.find(
            (fruit) => fruit.name === selectedFruit2.name
          );

          try {
            // Get fruit 1 (LEFT) info
            const res1 = await postFruitInfo(storedFruitObject1.id);
            // Get fruit 2 (RIGHT) info
            const res2 = await postFruitInfo(storedFruitObject2.id);

            setSuWaFi([
              res1.totalNutrients.SUGAR.quantity,
              res2.totalNutrients.SUGAR.quantity,
              res1.totalNutrients.WATER.quantity,
              res2.totalNutrients.WATER.quantity,
              res1.totalNutrients.FIBTG.quantity,
              res2.totalNutrients.FIBTG.quantity,
            ]);

            setIsLoadingBar(false);
          } catch (err) {
            console.log("EdamamAPI - Unable to POST fruitID 1 &/ 2: " + err);
          }
        }
      }
      fetchFruitInfo();
    }
  }, [selectedFruit1, selectedFruit2, idsInitialised]);

  // Gradient background
  let gradient = get2FruitGradient(selectedFruit1.name, selectedFruit2.name, "horisontal");

  return (
    <div className="bg-slate-50">
      {/* Header / Hero */}
      <div className={`${gradient} rounded-b-3xl`}>
        {/* Content */}
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
          <NavBar />
          <CompareHeader
            dropdownSelect1={selectedFruit1}
            dropdownSetSelect1={setSelectedFruit1}
            dropdownSelect2={selectedFruit2}
            dropdownSetSelect2={setSelectedFruit2}
          />
        </div>
      </div>
      {true ? (
        <div className="flex justify-center items-center ">
          <h1 className="font-head text-slate-500 text-2xl font-bold">Loading</h1>
        </div>
      ) : (
        <div>
          {/* Content */}
          <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6 pt-5 pb-20">
            {/* Caloric Composition */}
            <div className="flex flex-col md:flex-row justify-center">
              {/* Left Side */}
              <div className="w-full md:w-2/6">
                {isLoadingDonut1 ? (
                  <LoadingDonutChart />
                ) : (
                  <DonutChart dropdownSelect={selectedFruit1} fruitData={carProFatCal1} />
                )}
              </div>
              {/* Ride Side */}
              <div className="w-full md:w-2/6 md:ml-3 mt-5 md:mt-0">
                {isLoadingDonut2 ? (
                  <LoadingDonutChart />
                ) : (
                  <DonutChart dropdownSelect={selectedFruit2} fruitData={carProFatCal2} />
                )}
              </div>
            </div>
            {/* Vitamins */}
            <div className="flex flex-col md:flex-row justify-center mt-16 md:mt-3">
              {/* Left Side */}
              <div className="w-full md:w-2/6">
                {isLoadingPolar1 ? (
                  <LoadingPolarChart />
                ) : (
                  <PolarChart dropdownSelect={selectedFruit1} fruitData={vitAtoK1} />
                )}
              </div>
              {/* Ride Side */}
              <div className="w-full md:w-2/6 md:ml-3 mt-5 md:mt-0">
                {isLoadingPolar2 ? (
                  <LoadingPolarChart />
                ) : (
                  <PolarChart dropdownSelect={selectedFruit2} fruitData={vitAtoK2} />
                )}
              </div>
            </div>
            {/* Sugar, Water & Fibre */}
            <div className="flex flex-col md:flex-row justify-center mt-16 md:mt-3">
              <div className="w-full md:w-[68%] mt-5 md:mt-0">
                {isLoadingBar ? (
                  <LoadingBarChart />
                ) : (
                  <BarChart
                    dropdownSelect1={selectedFruit1}
                    dropdownSelect2={selectedFruit2}
                    fruitData={suWaFi}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-t-3xl">
            <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ComparePage;
