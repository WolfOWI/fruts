// Compare Page Header (on Compare Page)

// IMPORTS
// ----------------------------------
// Components
import DropdownFruits from "../../DropdownFruits/DropdownFruits";
// ----------------------------------

// COMPARE HEADER COMPONENT
// ----------------------------------
function CompareHeader({
  dropdownSelect1,
  dropdownSetSelect1,
  dropdownSelect2,
  dropdownSetSelect2,
}) {
  return (
    <div className="relative w-full pt-5 pb-10">
      {/* Fruit Image Left */}
      <div className="animate-left_in transition-all">
        <img
          src={dropdownSelect1.imgSrcFull}
          alt={`${dropdownSelect1.name}`}
          className="absolute w-72 hidden md:block sm:-left-56 md:-left-48 translate-y-6"
        />
      </div>
      {/* Fruit Image Right */}
      <div className="animate-right_in transition-all">
        <img
          src={dropdownSelect2.imgSrcFull}
          alt={`${dropdownSelect2.name}`}
          className="absolute w-72 hidden md:block sm:-right-56 md:-right-48 translate-y-6"
        />
      </div>
      {/* Centre Content */}
      {/* Title */}
      <div className="text-center">
        <h1 className="font-head text-slate-50 text-5xl font-bold pb-2">compare</h1>
        <p className="text-sm font-body mix-blend-overlay">nutrients per 100g</p>
      </div>
      {/* Dropdowns */}
      <div className="flex justify-center items-center mt-2 flex-col md:flex-row">
        <div className="w-full md:w-2/6">
          <DropdownFruits selectedFruit={dropdownSelect1} setSelectedFruit={dropdownSetSelect1} />
        </div>
        <div className="w-full md:w-2/6 md:ml-3">
          <DropdownFruits selectedFruit={dropdownSelect2} setSelectedFruit={dropdownSetSelect2} />
        </div>
      </div>
    </div>
  );
}
// ----------------------------------

export default CompareHeader;
