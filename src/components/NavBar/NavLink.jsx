// Navigation Bar Links

// Import the Link component for React Router
import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <a
      href={props.url}
      className="text-black font-head font-bold ps-8 mix-blend-overlay cursor-pointer hover:scale-110 hover:text-white ease-in-out duration-300"
    >
      <Link to={props.url}>{props.text}</Link>
    </a>
  );
}

export default NavLink;
