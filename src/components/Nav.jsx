import React from "react";

function Nav() {
  return (
    <nav className="border border-orange container">
      <a href="/" className="Mylogo">
        <img src="/assets/Svg/My-Logo.svg" alt="" />
      </a>

      {/* <section className="lg:hidden">
        <div className=" space-y-2 flex w-fit flex-col items-end">
          <span className="block h-0.5 w-8 bg-orange"></span>
          <span className="block h-0.5 w-6 bg-orange"></span>
          <span className="block h-0.5 w-5 bg-orange"></span>
        </div>

        <ul>
          <li>
            <a href="#">01.About</a>
          </li>
          <li>
            <a href="#">02.Projects</a>
          </li>
          <li>
            <a href="#">03.Contact</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
        </ul>
      </section> */}

      <ul>
        <li>
          <a href="#">01.About</a>
        </li>
        <li>
          <a href="#">02.Projects</a>
        </li>
        <li>
          <a href="#">03.Contact</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
