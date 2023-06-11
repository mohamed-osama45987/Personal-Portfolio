import React from "react";

const HamburgerButton = ({ navOpened, closeNav }) => {
  return (
    <button
      className="flex flex-col items-end z-10 cursor-pointer "
      onClick={closeNav}
    >
      <span
        className={`h-0.5 w-8 bg-orange  ${
          navOpened
            ? "rotate-45 transition-all duration-500 "
            : "-rotate-0 transition-all duration-500 mb-2"
        }`}
      />
      <span
        className={`bg-orange  ${
          navOpened
            ? "transition-opacity opacity-0  "
            : "transition-opacity opacity-100 h-0.5 w-6 mb-2"
        }`}
      />
      <span
        className={` h-0.5  bg-orange  ${
          navOpened
            ? " -rotate-45 transition-all duration-500 w-8 absolute"
            : "rotate-0 transition-all duration-500 w-5 mb-2 static"
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
