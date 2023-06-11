import { useEffect } from "react";
import { useLocation } from "react-router";

// Wrapper - when the user navigates to new route, scroll the page to the top
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
