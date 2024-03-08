// Standard Dropdown of Fruits

// Import components
import { Listbox, Transition } from "@headlessui/react";

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

// Import Icons
import expMore_icon from "../../assets/icons/ui/expand_more_icon.svg";

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

function DropdownFruits({ selectedFruit, setSelectedFruit }) {
  return (
    <Listbox value={selectedFruit} onChange={(newValue) => setSelectedFruit(newValue)}>
      <>
        <div className="relative w-full">
          <Listbox.Button className="relative mt-2 py-5 w-full cursor-pointer text-slate-800 font-head font-bold text-center sm:text-sm">
            <div className="flex justify-center items-center">
              <img
                src={selectedFruit.imgSrcCut}
                alt={selectedFruit.name + " icon"}
                className="h-10 w-10 absolute left-4 z-10"
              />
              <div className="truncate z-10 text-lg text-slate-50">{selectedFruit.name}</div>
              <img src={expMore_icon} alt="expand icon" className="h-6 w-6 absolute right-4 z-10" />
              <div className="w-full h-full border-2 bg-slate-700 border-black mix-blend-overlay absolute opacity-50 rounded-2xl z-0"></div>
            </div>
          </Listbox.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-2xl bg-slate-50 py-1 text-base shadow-lg sm:text-sm">
              {fruitsList.map((fruit) => (
                <Listbox.Option
                  key={fruitsList.id}
                  className={`${fruit.hoverColor} relative cursor-pointer select-none py-2`}
                  value={fruit}
                >
                  <>
                    <div className="flex items-center ml-6">
                      <img src={fruit.imgSrcCut} alt={fruit.name + " icon"} className="h-8 w-8" />
                      <p className="font-head ml-5">{fruit.name}</p>
                    </div>
                  </>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </>
    </Listbox>
  );
}

export default DropdownFruits;
