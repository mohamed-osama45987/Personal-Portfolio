import React from "react";
import { useState } from "react";

import MobileMenu from "./MobileMenu";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    return setIsNavOpen(!isNavOpen);
  };

  isNavOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  return (
    <nav className="min-w-full p-7 bg-navBackGround flex justify-between items-center fixed backdrop-blur-sm">
      <a href="/" className="Mylogo">
        <img src="/assets/Svg/My-Logo.svg" alt="Mohamed's logo" />
      </a>

      <section className="hamburgerMenu lg:hidden ">
        <button
          className=" openButton space-y-2 flex w-fit flex-col items-end"
          onClick={toggleMenu}
        >
          <span className="block h-0.5 w-8 bg-orange"></span>
          <span className="block h-0.5 w-6 bg-orange"></span>
          <span className="block h-0.5 w-5 bg-orange"></span>
        </button>

        <MobileMenu navOpened={isNavOpen} closeNav={toggleMenu} />
      </section>

      <ul className=" hidden lg:flex items-center justify-between gap-x-8">
        <li>
          <a href="#">01.About</a>
        </li>
        <li>
          <a href="#">02.Projects</a>
        </li>
        <li>
          <a href="#">03.Contact</a>
        </li>
        <li className="text-orange px-2 py-3 border border-orange rounded">
          <a href="#">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
