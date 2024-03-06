// Standard Dropdown of Fruits

// Import Fruit Imagery
import appleCut from "../../assets/img/fruits/apple_cut.png";
import kiwiCut from "../../assets/img/fruits/kiwi_cut.png";
import lemonCut from "../../assets/img/fruits/lemon_cut.png";
import orangeCut from "../../assets/img/fruits/orange_cut.png";
import peachCut from "../../assets/img/fruits/peach_cut.png";
import pearCut from "../../assets/img/fruits/pear_cut.png";
import plumCut from "../../assets/img/fruits/plum_cut.png";
import berryCut from "../../assets/img/fruits/berry_cut.png";
import melonCut from "../../assets/img/fruits/melon_cut.png";

// Import Icons
import expMore_icon from "../../assets/icons/ui/expand_more_icon.svg";
// import expLess_icon from "../../assets/icons/ui/expand_less_icon.svg";

import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

// Fruit Options (array of objects)
const fruits = [
  {
    id: 1,
    name: "apple",
    imgSrc: appleCut,
    hoverColor: "hover:bg-blue-100",
  },
  {
    id: 2,
    name: "kiwi",
    imgSrc: kiwiCut,
    hoverColor: "hover:bg-lime-100",
  },
  {
    id: 3,
    name: "lemon",
    imgSrc: lemonCut,
    hoverColor: "hover:bg-yellow-100",
  },
  {
    id: 4,
    name: "orange",
    imgSrc: orangeCut,
    hoverColor: "hover:bg-orange-100",
  },
  {
    id: 5,
    name: "peach",
    imgSrc: peachCut,
    hoverColor: "hover:bg-rose-100",
  },
  {
    id: 6,
    name: "pear",
    imgSrc: pearCut,
    hoverColor: "hover:bg-pink-100",
  },
  {
    id: 7,
    name: "plum",
    imgSrc: plumCut,
    hoverColor: "hover:bg-violet-100",
  },
  {
    id: 8,
    name: "berry",
    imgSrc: berryCut,
    hoverColor: "hover:bg-red-100",
  },
  {
    id: 9,
    name: "melon",
    imgSrc: melonCut,
    hoverColor: "hover:bg-green-100",
  },
];

function DropdownFruits() {
  const [selectedFruit, setSelectedFruit] = useState(fruits[0]);

  return (
    <Listbox value={selectedFruit} onChange={setSelectedFruit}>
      <>
        <div className="relative w-full">
          <Listbox.Button className="mt-2 py-5 relative w-full cursor-pointer rounded-2xl bg-slate-50 text-slate-800 font-head font-bold text-center sm:text-sm">
            <div className="flex justify-center items-center">
              <img
                src={selectedFruit.imgSrc}
                alt={selectedFruit.name + " icon"}
                className="h-10 w-10 absolute left-4"
              />
              <div className="truncate">{selectedFruit.name}</div>
              <img src={expMore_icon} alt="expand icon" className="h-6 w-6 absolute right-4 " />
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
              {fruits.map((fruit) => (
                <Listbox.Option
                  key={fruits.id}
                  className={`${fruit.hoverColor} relative cursor-pointer select-none py-2`}
                  value={fruit}
                >
                  <>
                    <div className="flex items-center ml-6">
                      <img src={fruit.imgSrc} alt={fruit.name + " icon"} className="h-8 w-8" />
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
