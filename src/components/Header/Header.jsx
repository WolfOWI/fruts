// Header Section

// Imagery Import
import appleFull from "../../assets/img/fruits/apple.png";
import melonCut from "../../assets/img/fruits/melon_cut.png";

function Header() {
  return (
    <div className="w-full pt-5 pb-10 grid grid-cols-2">
      <div className="">
        <h1 className="font-head text-slate-50 text-5xl font-bold pb-2">
          for the love of <span className="text-yellow-300">fruit</span>
        </h1>
        <p className="text-sm mix-blend-overlay">
          Explore the data of nine different fruit types, diving deep into their nutritional values
          and their prices across Europe.
        </p>
      </div>
      <div className="flex relative justify-center col">
        <img
          src={appleFull}
          className="h-auto -scale-x-100 md:w-3/4 lg:w-4/6 absolute object-contain"
          alt="apple"
        ></img>
        <img
          src={melonCut}
          className="h-auto md:w-3/4 lg:w-4/6 absolute translate-x-32 md:translate-x-40 object-contain"
          alt="watermelon"
        ></img>
      </div>
    </div>
  );
}

export default Header;
