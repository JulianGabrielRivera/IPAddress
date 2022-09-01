import { useState, useEffect } from "react";

const UseWindowDimensions = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    window.addEventListener("resize", () => {
      setWindowHeight(window.innerHeight);
    });
  }, []);
  return (
    <>
      <p>{windowWidth}</p>
      <p>{windowHeight}</p>
    </>
  );
};

export default UseWindowDimensions;
