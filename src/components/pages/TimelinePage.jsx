// Timeline Page

// Import useState Hook
import { useState } from "react";

// Imports for Chart JS

// Import Util Functions
import get1FruitBGColor from "../../utils/get1FruitBGColor.js";

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
    name: "berry",
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
  // State of fruitDropdown in Timelineheader
  const [selectedFruit, setSelectedFruit] = useState(fruitsList[3]);

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
      {/* Body */}
      <div className="">
        {/* Content */}
        <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6 pt-5 pb-20">
          {/* Line Chart */}
          <div className="w-full">
            <LineChart dropdownSelect={selectedFruit} />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-green-400 rounded-t-3xl">
          <div className="m-auto w-11/12 sm:w-4/5 lg:w-4/6">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelinePage;
