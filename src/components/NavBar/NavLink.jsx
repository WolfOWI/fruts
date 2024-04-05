// Navigation Bar Links (Used in navigation bar)

// IMPORTS
// ----------------------------------
// React Router Link
import { Link } from "react-router-dom";
// ----------------------------------

// NAVIGATION LINK COMPONENT
// ----------------------------------
function NavLink(props) {
  return (
    <Link
      to={props.url}
      className="text-black font-head font-bold ps-8 mix-blend-overlay cursor-pointer hover:scale-110 hover:text-white ease-in-out duration-300"
    >
      {props.text}
    </Link>
  );
}
// ----------------------------------

export default NavLink;
