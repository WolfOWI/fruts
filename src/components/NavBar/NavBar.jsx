// Navigation Bar

// Import Link object from React Router
import { Link } from "react-router-dom";

// Import sub-components
import NavLink from "../NavBar/NavLink.jsx";

// Logo Import
import logo from "../../assets/img/logos/fruts_full_black.svg";

function NavBar() {
  return (
    <nav className="grid grid-cols-2 py-5">
      <Link to="/">
        <img
          src={logo}
          className="h-6 mix-blend-overlay hover:scale-110 hover:invert ease-in-out duration-300"
          alt="frut logo"
        />
      </Link>
      <div className="flex justify-end items-center">
        <NavLink text="compare" url="/compare" />
        <NavLink text="timeline" url="/timeline" />
      </div>
    </nav>
  );
}

export default NavBar;
