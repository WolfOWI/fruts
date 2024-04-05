// Scroll to Top (Custom Hook)
// When on a new page, always start at the top

// IMPORTS
// ----------------------------------
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// ----------------------------------

// FUNCTION: SCROLL TO TOP
// ----------------------------------
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // When the pathname / url changes, set the current window to the top (0)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
// ----------------------------------

export default ScrollToTop;
