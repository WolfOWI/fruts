// Navigation Bar

// IMPORTS
// ----------------------------------
// React Router Link
import { Link } from "react-router-dom";
// Sub-components
import NavLink from "../NavBar/NavLink.jsx";
// Logo
import logo from "../../assets/img/logos/fruts_full_black.svg";
// ----------------------------------

// NAVBAR COMPONENT
// ----------------------------------
function NavBar() {
  return (
    <nav className="grid grid-cols-2 py-5">
      {/* Home Logo Link */}
      <Link to="/">
        <img
          src={logo}
          className="h-6 mix-blend-overlay hover:scale-110 hover:invert ease-in-out duration-300"
          alt="frut logo"
        />
      </Link>
      {/* Other Nav Links */}
      <div className="flex justify-end items-center">
        <NavLink text="compare" url="/compare" />
        <NavLink text="timeline" url="/timeline" />
      </div>
    </nav>
  );
}
// ----------------------------------

export default NavBar;
