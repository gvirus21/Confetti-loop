import React, { useEffect, useState } from "react";

const colors = [
  "red",
  "blue",
  "green",
  "purple",
  "violet",
  "pink",
  "yellow",
  "orange",
];

const ConfettiAnimation = () => {
  const [innerWidth, setInnerWidth] = useState(1800);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  return (
    <div className="box">
      {Array(800)
        .fill(0)
        .map((_, index) => {
          const size = Math.random() * 0.01 * index;
          const backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
          const left = Math.random() * innerWidth + "px";

          return (
            <div
              key={index}
              style={{
                height: 5 + size + "px",
                width: 16 + size + "px",
                backgroundColor,
                left,
              }}
              className="confetti"
            />
          );
        })}
    </div>
  );
};

export default ConfettiAnimation;
