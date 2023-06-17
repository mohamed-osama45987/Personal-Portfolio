import React from "react";
import { useState } from "react";

import MobileMenu from "./HamburgerMenu";
import MyResumeButton from "./buttons/MyResumeButton";

function Nav() {
  // Hamburger menu
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    return setIsNavOpen(!isNavOpen);
  };

  isNavOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  // smooth scrolling
  const handleClickScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 flex items-center justify-between min-w-full bg-navBackGround backdrop-blur-sm  px-5 py-7 lg:px-14 z-50">
      <a href="/" className="-z-10">
        <img src="/assets/Svg/My-Logo.svg" alt="Mohamed's logo" />
      </a>

      <ul className="items-center justify-between hidden lg:flex gap-x-8 text-white">
        <li>
          <a
            href="About"
            onClick={(e) => {
              e.preventDefault();
              handleClickScroll(e.target.attributes.href.value);
            }}
            className="hover:text-orange"
          >
            01.About
          </a>
        </li>
        <li>
          <a
            href="Projects"
            onClick={(e) => {
              e.preventDefault();
              handleClickScroll(e.target.attributes.href.value);
            }}
            className="hover:text-orange"
          >
            02.Projects
          </a>
        </li>
        <li>
          <a
            href="Contact"
            onClick={(e) => {
              e.preventDefault();
              handleClickScroll(e.target.attributes.href.value);
            }}
            className="hover:text-orange"
          >
            03.Contact
          </a>
        </li>
        <li>
          <MyResumeButton />
        </li>
      </ul>

      <MobileMenu navOpened={isNavOpen} closeNav={toggleMenu} />
    </nav>
  );
}

export default Nav;
