import { useState, useLayoutEffect, useDebugValue } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth > 1024) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useDebugValue(isMobile ? "mobile" : "desktop");

  return isMobile;
};

export default useMobile;
