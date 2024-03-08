// Fruit Type Cards (Landing Page)

// Components
import FruitTypeCardImg from "./FruitTypeCardImg";
import FruitTypeCardParag from "./FruitTypeCardParag";
import get1FruitGradientHover from "../../../../utils/get1FruitGradientHover";

function FruitTypeCard(props) {
  // Hover gradient Based on fruit
  const hoverGradient = get1FruitGradientHover(props.fruit, "diagonal");

  return (
    <div
      className={`group flex flex-col items-center cursor-default transition-all duration-300 ease-in-out bg-slate-100 ${hoverGradient} rounded-3xl p-6 m-2`}
    >
      <div className="flex justify-center group-hover:animate-wiggle">
        <FruitTypeCardImg fruit={props.fruit} />
      </div>

      <h3 className="text-center font-head font-bold p-1">{props.fruit}</h3>
      <FruitTypeCardParag fruit={props.fruit} />
    </div>
  );
}

export default FruitTypeCard;
