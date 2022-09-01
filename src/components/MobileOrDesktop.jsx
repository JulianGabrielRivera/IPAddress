import React from "react";
import { useMediaQuery } from "react-responsive";

const MobileOrDesktop = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}

      {isTabletOrMobile && <p>You are a mobile phone</p>}
    </div>
  );
};

export default MobileOrDesktop;
