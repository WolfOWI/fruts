// Navigation Bar Links

function NavLink(props) {
  return (
    <a
      href={props.url}
      className="font-head font-bold ps-8 mix-blend-overlay cursor-pointer hover:scale-110 hover:text-white ease-in-out duration-300"
    >
      {props.text}
    </a>
  );
}

export default NavLink;
