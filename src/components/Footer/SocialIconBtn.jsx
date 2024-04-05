// Social Media Icon Buttons (Footer)

// Import Icons
import fbSocialIcon from "../../assets/icons/social/facebook_icon.svg";
import xSocialIcon from "../../assets/icons/social/x_icon.svg";
import instaSocialIcon from "../../assets/icons/social/instagram_icon.svg";
import ytSocialIcon from "../../assets/icons/social/youtube_icon.svg";

function SocialIconBtn(props) {
  let iconSrc = "";

  // What icon to use based on SOCIAL property
  switch (props.social) {
    case "facebook":
      iconSrc = fbSocialIcon;
      break;

    case "instagram":
      iconSrc = instaSocialIcon;
      break;

    case "x":
      iconSrc = xSocialIcon;
      break;

    case "youtube":
      iconSrc = ytSocialIcon;
      break;

    default:
      break;
  }

  // Return icon anchor element
  return (
    <a
      className="w-5 flex justify-center items-center"
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={iconSrc}
        alt={`${props.social} icon`}
        className="mix-blend-soft-light hover:scale-125 hover:invert hover:mix-blend-overlay transition-all duration-300 ease-in-out"
      />
    </a>
  );
}

export default SocialIconBtn;
