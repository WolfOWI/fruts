// Footer

// IMPORTS
// ----------------------------------
// Sub-components
import NavLink from "../NavBar/NavLink.jsx";
import SocialIconBtn from "./SocialIconBtn.jsx";
// Logos & Icons
import logo from "../../assets/img/logos/fruts_full_white.svg";
import line from "../../assets/icons/ui/horisontal_line_break.svg";
// ----------------------------------

// FOOTER COMPONENT
// ----------------------------------
function Footer() {
  return (
    <div className="pt-10 pb-4">
      <div className="grid grid-cols-3">
        {/* Navigation Links */}
        <div className="flex flex-col h-24 justify-between">
          <NavLink text="home" url="/" />
          <NavLink text="compare" url="/compare" />
          <NavLink text="timeline" url="/timeline" />
        </div>
        <div className="flex flex-col h-24 justify-between">
          <NavLink text="about us" url="/" />
          <NavLink text="terms & conditions" url="/" />
          <NavLink text="contact us" url="/" />
        </div>
        {/* Logo & Socials */}
        <div className="flex flex-col h-24 justify-end items-center">
          <img
            src={logo}
            className="h-10 hover:scale-110 ease-in-out duration-300"
            alt="frut logo"
          />
          <div className="flex justify-between h-4 w-1/2 mt-2">
            <SocialIconBtn social="facebook" url="http://facebook.com" />
            <SocialIconBtn social="instagram" url="http://instagram.com" />
            <SocialIconBtn social="x" url="http://twitter.com" />
            <SocialIconBtn
              social="youtube"
              url="https://youtu.be/dQw4w9WgXcQ?si=Xm2X7ZotJDKPbDbc"
            />
          </div>
        </div>
      </div>
      {/* Copyright Information */}
      <div className="flex flex-col items-center py-7">
        <img
          className="w-full mix-blend-overlay opacity-30"
          src={line}
          alt="Horisontal line break"
        />
        <p className="font-body text-black mix-blend-overlay pt-2" style={{ fontSize: "10px" }}>
          © Fruts 2024 | DV200 T1 | All Rights Reserved
        </p>
      </div>
    </div>
  );
}
// ----------------------------------

export default Footer;
