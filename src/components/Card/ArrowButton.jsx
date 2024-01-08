import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ArrowButton = ({ className, style, onClick, direction, color }) => {
  const iconColor = color || (direction === "next" ? "text-gray-500" : "text-gray-400");

  return (
    <div
      className={className}
      style={{
        ...style,
        fontSize: "24px",
        position: "absolute",
        top: "-15px",
        cursor: "pointer",
        zIndex: direction === "next" ? "1" : "1",
        [direction === "next" ? "right" : "left"]: direction === "next" ? "0%" : "96%",
      }}
      onClick={onClick}
    >
      {direction === "next" ? (
        <IoIosArrowForward className={iconColor} />
      ) : (
        <IoIosArrowBack className={iconColor} />
      )}
    </div>
  );
};

export default ArrowButton;
