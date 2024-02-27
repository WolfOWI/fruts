// Fruit Type Cards (Landing Page)

// State Management
import { useState } from "react";
import FruitTypeCardImg from "./FruitTypeCardImg";
import FruitTypeCardParag from "./FruitTypeCardParag";

function FruitTypeCard(props) {
  // Hover State
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center bg-slate-100 rounded-3xl p-6 m-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FruitTypeCardImg fruit={props.fruit} />
      <h3 className="text-center font-head font-bold p-1">{props.fruit}</h3>
      <FruitTypeCardParag fruit={props.fruit} />
    </div>
  );
}

export default FruitTypeCard;
