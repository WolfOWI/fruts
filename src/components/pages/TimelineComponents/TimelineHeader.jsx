// Timeline Page Header

// Import Components
import DropdownFruits from "../../DropdownFruits/DropdownFruits";

function TimelineHeader({ dropdownSelect, dropdownSetSelect }) {
  return (
    <div className="flex pt-5 pb-5">
      <div className="w-1/2">
        <h1 className="font-head text-slate-50 text-5xl font-bold pb-2">timeline of prices</h1>
        <p className="text-sm font-body mix-blend-overlay">In Europe over a 10 year period.</p>
        <div className="mt-3 w-full sm:w-5/6 lg:2/6">
          <DropdownFruits selectedFruit={dropdownSelect} setSelectedFruit={dropdownSetSelect} />
        </div>
      </div>
      <div className="w-1/2 hidden sm:flex relative justify-center ">
        <img
          src={dropdownSelect.imgSrcCut}
          className="h-auto w-full md:w-3/4 lg:w-4/6 xl:w-1/2 2xl:w-2/5 absolute object-contain z-20"
          alt="apple"
        ></img>
        <img
          src={dropdownSelect.imgSrcFull}
          className="h-auto w-full md:w-3/4 lg:w-4/6 xl:w-1/2 2xl:w-2/5 absolute translate-x-32 md:translate-x-40 object-contain"
          alt="watermelon"
        ></img>
      </div>
    </div>
  );
}

export default TimelineHeader;
