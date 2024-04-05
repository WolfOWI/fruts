// Landing Page Header (on landing page)

// IMPORTS
// ----------------------------------
// Images
import appleFull from "../../../assets/img/fruits/apple.png";
import melonCut from "../../../assets/img/fruits/melon_cut.png";
// ----------------------------------

// LANDING HEADER COMPONENT
// ----------------------------------
function LandingHeader() {
  return (
    // Left Titles & Text
    <div className="w-full pt-5 pb-10 grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h1 className="font-head text-slate-50 text-5xl font-bold pb-2">
          for the love of <span className="text-yellow-300">fruit</span>
        </h1>
        <p className="text-sm font-body mix-blend-overlay">
          Explore the data of nine different fruit types, diving deep into their nutritional values
          and their prices across Europe.
        </p>
      </div>
      {/* Right Fruit Images */}
      <div className="hidden sm:flex relative justify-center col">
        <img
          src={appleFull}
          className="h-auto -scale-x-100 md:w-3/4 lg:w-4/6 xl:w-1/2 2xl:w-2/5 absolute object-contain"
          alt="apple"
        ></img>
        <img
          src={melonCut}
          className="h-auto md:w-3/4 lg:w-4/6 xl:w-1/2 2xl:w-2/5 absolute translate-y-5 translate-x-32 md:translate-x-40 object-contain"
          alt="watermelon"
        ></img>
      </div>
    </div>
  );
}
// ----------------------------------

export default LandingHeader;
