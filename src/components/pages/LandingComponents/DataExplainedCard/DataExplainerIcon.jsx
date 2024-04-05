// Data Explainer Card Icons (Used in Data Explainer Points in Data Explained Cards)

// IMPORTS
// ----------------------------------
// Icons
import grillIcon from "../../../../assets/icons/things/grill_icon.svg";
import fireIcon from "../../../../assets/icons/things/fire_icon.svg";
import burgerIcon from "../../../../assets/icons/things/burger_icon.svg";
import dropletIcon from "../../../../assets/icons/things/droplet_icon.svg";
import cookieIcon from "../../../../assets/icons/things/cookie_icon.svg";
import fruitIcon from "../../../../assets/icons/things/fruit_icon.svg";
import aIcon from "../../../../assets/icons/letters/a_icon.svg";
import b6Icon from "../../../../assets/icons/letters/b6_icon.svg";
import cIcon from "../../../../assets/icons/letters/c_icon.svg";
import eIcon from "../../../../assets/icons/letters/e_icon.svg";
import kIcon from "../../../../assets/icons/letters/k_icon.svg";
import euroIcon from "../../../../assets/icons/things/euro_icon.svg";
import clockIcon from "../../../../assets/icons/things/clock_icon.svg";
// ----------------------------------

// DATA EXPLAINER ICON COMPONENT
// ----------------------------------
function DataExplainerIcon(props) {
  let icon;

  // Return a different icons based on ABOUT property
  switch (props.about) {
    case "protein":
      icon = grillIcon;
      break;

    case "carbohydrates":
      icon = fireIcon;
      break;

    case "fat":
      icon = burgerIcon;
      break;

    case "water":
      icon = dropletIcon;
      break;

    case "sugar":
      icon = cookieIcon;
      break;

    case "fibre":
      icon = fruitIcon;
      break;

    case "vitA":
      icon = aIcon;
      break;

    case "vitB6":
      icon = b6Icon;
      break;

    case "vitC":
      icon = cIcon;
      break;

    case "vitE":
      icon = eIcon;
      break;

    case "vitK":
      icon = kIcon;
      break;

    case "euros":
      icon = euroIcon;
      break;

    case "years":
      icon = clockIcon;
      break;

    default:
      icon = "#";
      break;
  }

  return <img src={icon} alt={props.about + " icon"} className="w-8" />;
}
// ----------------------------------

export default DataExplainerIcon;
