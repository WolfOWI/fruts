// Data Explainer Card Icons (Landing Page)

import grillIcon from "../../../../assets/icons/things/grill_icon.svg";
import fireIcon from "../../../../assets/icons/things/fire_icon.svg";
import burgerIcon from "../../../../assets/icons/things/burger_icon.svg";
import dropletIcon from "../../../../assets/icons/things/droplet_icon.svg";
import cookieIcon from "../../../../assets/icons/things/cookie_icon.svg";
import fruitIcon from "../../../../assets/icons/things/fruit_icon.svg";
import euroIcon from "../../../../assets/icons/things/euro_icon.svg";
import clockIcon from "../../../../assets/icons/things/clock_icon.svg";

function DataExplainerIcon(props) {
  let icon;
  let color;

  let calColor = "bg-red-500";
  let sugColor = "bg-green-500";
  let vitColor = "bg-blue-500";
  let timColor = "bg-amber-500";

  switch (props.about) {
    case "protein":
      icon = grillIcon;
      color = calColor;
      break;

    case "carbohydrates":
      icon = fireIcon;
      color = calColor;
      break;

    case "fat":
      icon = burgerIcon;
      color = calColor;
      break;

    default:
      break;
  }

  return (
    <div className={`${color} p-2 rounded-full flex justify-center items-center`}>
      <img src={icon} alt={props.about + " icon"} className="w-7" />
    </div>
  );
}

export default DataExplainerIcon;
