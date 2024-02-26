// Navigation Bar

// Import sub-components
import NavLink from "../NavBar/NavLink.jsx";

// Logo Import
import logo from "../../assets/img/logos/fruts_full_black.svg";

function NavBar() {
  return (
    <nav className="grid grid-cols-2 py-5">
      <a href="#">
        <img
          src={logo}
          className="h-6 mix-blend-overlay cursor-pointer hover:scale-110 hover:invert ease-in-out duration-300"
        />
      </a>
      <div className="flex justify-end items-center">
        <NavLink text="compare" url="#" />
        <NavLink text="timeline" url="#" />
      </div>
    </nav>
  );
}

export default NavBar;
