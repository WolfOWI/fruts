// Fruts Compare Page

// IMPORTS
// ----------------------------------
// Hooks
import { useState, useEffect } from "react";
// API
import { getApiFruitID, postFruitInfo } from "../../api/edamamAPI.js";
// Util functions
import get2FruitGradient from "../../utils/get2FruitGradient.js";
import generateRandomNum from "../../utils/generateRandomNum.js";
// Components (General)
import NavBar from "../NavBar/NavBar.jsx";
import CompareHeader from "./CompareComponents/CompareHeader.jsx";
import Footer from "../Footer/Footer.jsx";
// Components (Compare Page Specific)
import DonutChart from "../charts/DonutChart/DonutChart.jsx";
import PolarChart from "../charts/PolarChart/PolarChart.jsx";
import BarChart from "../charts/BarChart/BarChart.jsx";
// Images
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
// Loading Animation (from UIBall - LDRS)
import { hourglass } from "ldrs";
hourglass.register();
// ----------------------------------

// FRUIT VISUAL OBJECTS
// ----------------------------------
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
// ----------------------------------

// COMPARE PAGE COMPONENT
// ----------------------------------
function ComparePage() {
  // RANDOM FRUIT SHOWN ON PAGE LOAD
  // - - - - - - - - - - -
  // Generate 2 different random numbers
  let rdmNum1 = generateRandomNum(9);
  let rdmNum2 = generateRandomNum(9);
  while (rdmNum1 === rdmNum2) {
    // (regenerate if the same)
    rdmNum2 = generateRandomNum(9);
  }
  // - - - - - - - - - - -

  // STATES
  // - - - - - - - - - - -
  // Fruit dropdown states
  const [selectedFruit1, setSelectedFruit1] = useState(fruitsList[rdmNum1]);
  const [selectedFruit2, setSelectedFruit2] = useState(fruitsList[rdmNum2]);
  // Graph API Data States
  const [carProFatCal1, setCarProFatCal1] = useState([]); //Donut 1 (left) (fat, protein, carbs, calories)
  const [carProFatCal2, setCarProFatCal2] = useState([]); //Donut 2 (right) (fat, protein, carbs, calories)
  const [vitAtoK1, setVitAtoK1] = useState([]); //Polar 1 (left) (Vit A, B6, C, E, K)
  const [vitAtoK2, setVitAtoK2] = useState([]); //Polar 2 (right) (Vit A, B6, C, E, K)
  const [suWaFi, setSuWaFi] = useState([]); //Bar graph (sugar, water, fibre)
  // API Loading State
  const [isLoading, setIsLoading] = useState(true); //Waiting for data from API
  // FruitID initialisation (from api) - first time setup (sessionStorage)
  const [idsInitialised, setIdsInitialised] = useState(false);
  // - - - - - - - - - - -

  // EFFECT
  // - - - - - - - - - - -
  // STORE FRUIT IDs IN SESSIONSTORAGE (API CALL 1)
  // . . . . . . . . .
  useEffect(() => {
    async function initialiseFruitIds() {
      if (!sessionStorage.getItem("storedFruitIds")) {
        const fruitIds = await Promise.all(
          fruitsList.map(async (fruit) => {
            const apiId = await getApiFruitID(fruit.name);
            return { name: fruit.name, id: apiId };
          })
        );
        sessionStorage.setItem("storedFruitIds", JSON.stringify(fruitIds));
      }
      setIdsInitialised(true);
    }
    initialiseFruitIds();
  }, []);
  // . . . . . . . . .

  // UPDATE FRUIT 1 & 2 GRAPHS USING CACHED OR FETCHED DATA
  // . . . . . . . . .
  useEffect(() => {
    if (idsInitialised) {
      async function fetchFruitInfo(fruit, setCarProFatCal, setVitAtoK) {
        const cachedData = sessionStorage.getItem(`fruitData_${fruit.name}`);
        if (cachedData) {
          const res = JSON.parse(cachedData);
          setCarProFatCal([
            res.totalNutrients.CHOCDF.quantity,
            res.totalNutrients.PROCNT.quantity,
            res.totalNutrients.FAT.quantity,
            res.totalNutrients.ENERC_KCAL.quantity,
          ]);
          setVitAtoK([
            Math.round(res.totalDaily.VITA_RAE.quantity),
            Math.round(res.totalDaily.VITB6A.quantity),
            Math.round(res.totalDaily.VITC.quantity),
            Math.round(res.totalDaily.TOCPHA.quantity),
            Math.round(res.totalDaily.VITK1.quantity),
          ]);
        } else {
          const storedFruitIds = JSON.parse(sessionStorage.getItem("storedFruitIds"));
          const storedFruitObject = storedFruitIds.find(
            (storedFruit) => storedFruit.name === fruit.name
          );
          const res = await postFruitInfo(storedFruitObject.id);
          sessionStorage.setItem(`fruitData_${fruit.name}`, JSON.stringify(res));
          setCarProFatCal([
            res.totalNutrients.CHOCDF.quantity,
            res.totalNutrients.PROCNT.quantity,
            res.totalNutrients.FAT.quantity,
            res.totalNutrients.ENERC_KCAL.quantity,
          ]);
          setVitAtoK([
            Math.round(res.totalDaily.VITA_RAE.quantity),
            Math.round(res.totalDaily.VITB6A.quantity),
            Math.round(res.totalDaily.VITC.quantity),
            Math.round(res.totalDaily.TOCPHA.quantity),
            Math.round(res.totalDaily.VITK1.quantity),
          ]);
        }
      }

      fetchFruitInfo(selectedFruit1, setCarProFatCal1, setVitAtoK1);
      fetchFruitInfo(selectedFruit2, setCarProFatCal2, setVitAtoK2);
    }
  }, [selectedFruit1, selectedFruit2, idsInitialised]);

  // UPDATE SHARED BAR GRAPH FOR FRUIT 1 & 2
  // . . . . . . . . .
  useEffect(() => {
    if (idsInitialised) {
      async function fetchBothFruitInfo() {
        const storedFruitIds = JSON.parse(sessionStorage.getItem("storedFruitIds"));

        const storedFruitObject1 = storedFruitIds.find(
          (fruit) => fruit.name === selectedFruit1.name
        );
        const storedFruitObject2 = storedFruitIds.find(
          (fruit) => fruit.name === selectedFruit2.name
        );

        // Check if the data for both fruits is already in sessionStorage
        const cachedData1 = sessionStorage.getItem(`fruitData_${selectedFruit1.name}`);
        const cachedData2 = sessionStorage.getItem(`fruitData_${selectedFruit2.name}`);

        let res1, res2;

        if (cachedData1 && cachedData2) {
          // If data for both fruits is cached, use it
          res1 = JSON.parse(cachedData1);
          res2 = JSON.parse(cachedData2);
        } else {
          // If data is not cached, make API calls
          [res1, res2] = await Promise.all([
            cachedData1
              ? Promise.resolve(JSON.parse(cachedData1))
              : postFruitInfo(storedFruitObject1.id),
            cachedData2
              ? Promise.resolve(JSON.parse(cachedData2))
              : postFruitInfo(storedFruitObject2.id),
          ]);

          // Store the data in sessionStorage if it was fetched
          if (!cachedData1) {
            sessionStorage.setItem(`fruitData_${selectedFruit1.name}`, JSON.stringify(res1));
          }
          if (!cachedData2) {
            sessionStorage.setItem(`fruitData_${selectedFruit2.name}`, JSON.stringify(res2));
          }
        }

        // Set Sugar, Water, and Fiber for both fruits
        setSuWaFi([
          res1.totalNutrients.SUGAR.quantity,
          res2.totalNutrients.SUGAR.quantity,
          res1.totalNutrients.WATER.quantity,
          res2.totalNutrients.WATER.quantity,
          res1.totalNutrients.FIBTG.quantity,
          res2.totalNutrients.FIBTG.quantity,
        ]);

        setIsLoading(false);
      }

      fetchBothFruitInfo();
    }
  }, [selectedFruit1, selectedFruit2, idsInitialised]);

  // - - - - - - - - - - -

  // COLOUR
  // - - - - - - - - - - -
  // Gradient background
  let gradient = get2FruitGradient(selectedFruit1.name, selectedFruit2.name, "horisontal");
  // - - - - - - - - - - -

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
      {/* If still loading data, show pre-loader */}
      {isLoading ? (
        <div className="flex justify-center items-start h-dvh bg-transparent pt-32">
          <div className="flex items-center">
            <l-hourglass size="80" bg-opacity="0.5" speed="2" color="#60a5fa"></l-hourglass>
            <h1 className="font-head text-slate-500 text-2xl font-bold ml-6">Getting Fruit Data</h1>
          </div>
        </div>
      ) : (
        <div>
          {/* Content */}
          <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6 pt-5 pb-20">
            {/* Caloric Composition */}
            <div className="flex flex-col md:flex-row justify-center">
              {/* Left Side */}
              <div className="w-full md:w-2/6">
                <DonutChart dropdownSelect={selectedFruit1} fruitData={carProFatCal1} />
              </div>
              {/* Right Side */}
              <div className="w-full md:w-2/6 md:ml-3 mt-5 md:mt-0">
                <DonutChart dropdownSelect={selectedFruit2} fruitData={carProFatCal2} />
              </div>
            </div>
            {/* Vitamins */}
            <div className="flex flex-col md:flex-row justify-center mt-16 md:mt-3">
              {/* Left Side */}
              <div className="w-full md:w-2/6">
                <PolarChart dropdownSelect={selectedFruit1} fruitData={vitAtoK1} />
              </div>
              {/* Right Side */}
              <div className="w-full md:w-2/6 md:ml-3 mt-5 md:mt-0">
                <PolarChart dropdownSelect={selectedFruit2} fruitData={vitAtoK2} />
              </div>
            </div>
            {/* Sugar, Water & Fibre */}
            <div className="flex flex-col md:flex-row justify-center mt-16 md:mt-3">
              <div className="w-full md:w-[68%] mt-5 md:mt-0">
                <BarChart
                  dropdownSelect1={selectedFruit1}
                  dropdownSelect2={selectedFruit2}
                  fruitData={suWaFi}
                />
              </div>
            </div>
          </div>
          {/* Footer */}
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
// ----------------------------------

export default ComparePage;
