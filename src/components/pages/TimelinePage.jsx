// Timeline Page

// Import useState Hook
import { useState, useEffect } from "react";

// Import Util Functions
import get1FruitBGColor from "../../utils/get1FruitBGColor.js";
import generateRandomNum from "../../utils/generateRandomNum.js";
import fruitNameToPlural from "../../utils/fruitNameToPlural.js";

// Import API Functions
import getDecadeFruitPrices from "../../api/euAgriDataAPI.js";

// Import Components (General)
import NavBar from "../NavBar/NavBar.jsx";
import TimelineHeader from "./TimelineComponents/TimelineHeader.jsx";
import LineChart from "../charts/LineChart/LineChart.jsx";
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

// Import Loading Animation (from UIBall - LDRS)
import { hourglass } from "ldrs";
hourglass.register();

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

function TimelinePage() {
  // Generate random number (for dropdown select)
  let rdmNum1 = generateRandomNum(9);
  // State of fruitDropdown in Timelineheader
  const [selectedFruit, setSelectedFruit] = useState(fruitsList[rdmNum1]);

  // State of Fruit Price Data
  const [fruitPriceData, setFruitPriceData] = useState([]);

  // Loading State
  const [isLoading, setIsLoading] = useState(true); //Waiting for data fromAPI

  // When the state of dropdown is changed
  useEffect(() => {
    setIsLoading(true);
    // console.log("useEffect" + fruitNameToPlural(selectedFruit.name));
    getDecadeFruitPrices(fruitNameToPlural(selectedFruit.name))
      .then((arr) => {
        // console.log("Results from getDecadeFruitPrices: ", arr);
        setFruitPriceData(arr);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Failed to get fruit prices: ", err);
      });
  }, [selectedFruit]);

  // Get Gradient of selected fruit
  let gradient = get1FruitBGColor(selectedFruit.name);

  return (
    <div className="bg-slate-50">
      {/* Header / Hero */}
      <div className={`${gradient} rounded-b-3xl`}>
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
          <NavBar />
          <TimelineHeader dropdownSelect={selectedFruit} dropdownSetSelect={setSelectedFruit} />
        </div>
      </div>
      {/* If still loading data, show pre-loader */}
      {isLoading ? (
        <div className="flex justify-center items-center m-52 bg-transparent">
          <l-hourglass size="80" bg-opacity="0.5" speed="2" color="#60a5fa"></l-hourglass>
          <h1 className="font-head text-slate-500 text-2xl font-bold ml-6">Getting Fruit Data</h1>
        </div>
      ) : (
        <div className="">
          {/* Content */}
          <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6 pt-8 pb-20">
            {/* Line Chart */}
            <div className="w-full">
              <LineChart dropdownSelect={selectedFruit} dataArr={fruitPriceData} />
            </div>
          </div>
        </div>
      )}
      <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-t-3xl">
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default TimelinePage;
