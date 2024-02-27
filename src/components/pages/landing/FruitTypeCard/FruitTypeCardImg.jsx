// Fruit Type Cards Images (Landing Page)

// Fruit Imagery
import appleFull from "../../../../assets/img/fruits/apple.png";
import appleCut from "../../../../assets/img/fruits/apple_cut.png";
import kiwiFull from "../../../../assets/img/fruits/kiwi.png";
import kiwiCut from "../../../../assets/img/fruits/kiwi_cut.png";
import lemonFull from "../../../../assets/img/fruits/lemon.png";
import lemonCut from "../../../../assets/img/fruits/lemon_cut.png";
import orangeFull from "../../../../assets/img/fruits/orange.png";
import orangeCut from "../../../../assets/img/fruits/orange_cut.png";
import peachFull from "../../../../assets/img/fruits/peach.png";
import peachCut from "../../../../assets/img/fruits/peach_cut.png";
import pearFull from "../../../../assets/img/fruits/pear.png";
import pearCut from "../../../../assets/img/fruits/pear_cut.png";
import plumFull from "../../../../assets/img/fruits/plum.png";
import plumCut from "../../../../assets/img/fruits/plum_cut.png";
import berryFull from "../../../../assets/img/fruits/berry.png";
import berryCut from "../../../../assets/img/fruits/berry_cut.png";
import melonFull from "../../../../assets/img/fruits/melon.png";
import melonCut from "../../../../assets/img/fruits/melon_cut.png";

// State Management
import { useState } from "react";

function FruitTypeCardImg(props) {
  let imgFull = "";
  let imgCut = "";

  switch (props.fruit) {
    case "apple":
      imgFull = appleFull;
      imgCut = appleCut;
      break;
    case "kiwi":
      imgFull = kiwiFull;
      imgCut = kiwiCut;
      break;
    case "lemon":
      imgFull = lemonFull;
      imgCut = lemonCut;
      break;
    case "orange":
      imgFull = orangeFull;
      imgCut = orangeCut;
      break;
    case "peach":
      imgFull = peachFull;
      imgCut = peachCut;
      break;
    case "pear":
      imgFull = pearFull;
      imgCut = pearCut;
      break;
    case "plum":
      imgFull = plumFull;
      imgCut = plumCut;
      break;
    case "strawberry":
      imgFull = berryFull;
      imgCut = berryCut;
      break;
    case "watermelon":
      imgFull = melonFull;
      imgCut = melonCut;
      break;

    default:
      imgFull = "";
      imgCut = "";
      break;
  }

  // Hover State
  const [isHovered, setIsHovered] = useState(false);

  // Image source changes depending on hovering
  // (if hovering - imgCut, else - imgFull)
  const imgSrc = `${isHovered ? imgCut : imgFull}`;

  return (
    <img
      src={imgSrc}
      alt={props.fruit + " image"}
      className="w-1/2 transition-all ease-in-out duration-300 hover:scale-110"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

export default FruitTypeCardImg;
