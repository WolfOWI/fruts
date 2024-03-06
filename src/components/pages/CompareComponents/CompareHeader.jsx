// Compare Page Header

// Components Import
import DropdownFruits from "../../DropdownFruits/DropdownFruits";

// Imagery Import
import appleFull from "../../../assets/img/fruits/apple.png";
import orangeFull from "../../../assets/img/fruits/orange.png";

function Header() {
  return (
    <div className="relative w-full pt-5 pb-10">
      {/* Fruit Left */}
      <div>
        <img
          src={appleFull}
          alt="-"
          className="absolute w-72 hidden md:block sm:-left-56 md:-left-48 translate-y-6"
        />
      </div>
      {/* Fruit Right */}
      <div>
        <img
          src={orangeFull}
          alt="-"
          className="absolute w-72 hidden md:block sm:-right-56 md:-right-48 translate-y-6"
        />
      </div>
      {/* Content Center */}
      <div className="text-center">
        <h1 className="font-head text-slate-50 text-5xl font-bold pb-2">compare</h1>
        <p className="text-sm font-body mix-blend-overlay">nutrients per 100g</p>
      </div>
      <div className="flex justify-center items-center mt-2 flex-col md:flex-row">
        <div className="w-full md:w-2/6">
          <DropdownFruits />
        </div>
        <div className="w-full md:w-2/6 md:ml-3">
          <DropdownFruits />
        </div>
      </div>
    </div>
  );
}

export default Header;
