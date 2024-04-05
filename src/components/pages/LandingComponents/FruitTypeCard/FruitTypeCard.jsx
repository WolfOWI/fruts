// Fruit Type Cards (on Landing Page)

// IMPORTS
// ----------------------------------
// Components
import FruitTypeCardImg from "./FruitTypeCardImg";
import FruitTypeCardParag from "./FruitTypeCardParag";
import get1FruitGradientHover from "../../../../utils/get1FruitGradientHover";
// ----------------------------------

// FRUIT TYPE CARD COMPONENT
// ----------------------------------
function FruitTypeCard(props) {
  // COLOUR
  // - - - - - - - - - - - - -
  // Hover gradient based on fruit
  const hoverGradient = get1FruitGradientHover(props.fruit, "diagonal");
  // - - - - - - - - - - - - -

  return (
    // Full Container (changes to gradient on hover)
    <div
      className={`group flex flex-col items-center transition-all duration-300 ease-in-out bg-slate-100 ${hoverGradient} rounded-3xl p-6 m-2`}
    >
      {/* Fruit Image */}
      <div className="flex justify-center group-hover:animate-wiggle">
        <FruitTypeCardImg fruit={props.fruit} />
      </div>

      {/* Name & Description */}
      <h3 className="text-center font-head font-bold p-1">{props.fruit}</h3>
      <FruitTypeCardParag fruit={props.fruit} />
    </div>
  );
}
// ----------------------------------

export default FruitTypeCard;
