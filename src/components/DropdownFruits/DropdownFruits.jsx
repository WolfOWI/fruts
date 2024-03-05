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
import expLess_icon from "../../assets/icons/ui/expand_less_icon.svg";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const fruitList = [
  {
    id: 1,
    name: "apple",
    imgSrc: appleCut,
  },
  {
    id: 2,
    name: "kiwi",
    imgSrc: kiwiCut,
  },
  {
    id: 3,
    name: "lemon",
    imgSrc: lemonCut,
  },
  {
    id: 4,
    name: "orange",
    imgSrc: orangeCut,
  },
  {
    id: 5,
    name: "peach",
    imgSrc: peachCut,
  },
  {
    id: 6,
    name: "pear",
    imgSrc: pearCut,
  },
  {
    id: 7,
    name: "plum",
    imgSrc: plumCut,
  },
  {
    id: 8,
    name: "strawberry",
    imgSrc: berryCut,
  },
  {
    id: 9,
    name: "watermelon",
    imgSrc: melonCut,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DropdownFruits() {
  const [selected, setSelected] = useState(fruitList[3]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img src={selected.imgSrc} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <img src={expMore_icon} className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {fruitList.map((fruit) => (
                  <Listbox.Option
                    key={fruitList.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={fruit}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={fruit.imgSrc}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {fruit.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

export default DropdownFruits;
