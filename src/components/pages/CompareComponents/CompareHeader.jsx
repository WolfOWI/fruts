// Compare Page Header

// Components Import
import DropdownFruits from "../../DropdownFruits/DropdownFruits";

// Imagery Import
import appleFull from "../../../assets/img/fruits/apple.png";
import orangeFull from "../../../assets/img/fruits/orange.png";

function Header() {
  return (
    <div className="w-full pt-5 pb-10">
      <div className="text-center">
        <h1 className="font-head text-slate-50 text-5xl font-bold pb-2">compare</h1>
        <p className="text-sm font-body mix-blend-overlay">nutrients per 100g</p>
      </div>
      <div className="flex justify-center mt-2">
        <div className="w-2/6">
          <DropdownFruits />
        </div>
        <div className="w-2/6 ml-3">
          <DropdownFruits />
        </div>
      </div>
    </div>
  );
}

export default Header;
