import React from "react";

function MobileMenu({ navOpened, closeNav }) {
  if (navOpened) {
    return (
      <nav className=" hamburgerList bg-projectDetailsBackground fixed right-0 top-0 min-h-screen min-w-full z-10 justify-center items-center flex">
        <button
          className="closeButton absolute p-5 top-10 right-5  animate-spin-once"
          onClick={closeNav}
        >
          <span className="block h-0.5 w-8 bg-orange -mb-0.5 rotate-45" />

          <span className="block h-0.5 w-8 bg-orange -rotate-45" />
        </button>

        <ul className="flex flex-col w-full pl-10 gap-8 text-3xl">
          <li>
            <a href="#">01.About</a>
          </li>
          <li>
            <a href="#">02.Projects</a>
          </li>
          <li>
            <a href="#">03.Contact</a>
          </li>

          <li className="border border-orange ml-0 m-5 p-2 rounded self-start">
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MobileMenu;
