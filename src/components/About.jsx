import React from "react";
import mySkillsArr from "../data/mySkills";

function About() {
  return (
    <section
      id="About"
      className="container mx-auto flex flex-col lg:flex-row p-5 md:p-8 gap-16 h-screen"
    >
      <div className="w-full lg:w-1/2">
        <h4 className="text-3xl text-headerColor mb-14 font-semibold">
          01.About me
        </h4>
        <p className="text-xl	text-textColor mb-8">
          Hello, my name is Mohamed I enjoy making websites. My interest in
          computers and programming specifically started when I was young I
          always enjoyed using computers for a lot of purposes.
        </p>

        <p className="text-xl	text-textColor">
          Fast forward now I am a
          <span className="text-orange"> full-stack developer</span> who create
          amazing user experiences for the web.
        </p>

        <h2 className="text-xl mb-6  mt-16 text-textColor">
          Some Technologies I Work With:-
        </h2>
        <div className="text-textColor flex gap-16">
          <ul>
            {mySkillsArr[0].map((skill, idx) => {
              return (
                <li className="flex gap-1 w-fit">
                  <img src="/assets/Svg/Triangle.svg" alt="orange triangle" />
                  {skill}
                </li>
              );
            })}
          </ul>

          <ul>
            {mySkillsArr[1].map((skill, idx) => {
              return (
                <li className="flex gap-1 w-fit">
                  <img src="/assets/Svg/Triangle.svg" alt="orange triangle" />
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="lg:w-1/2 hidden lg:flex items-start content-center lg:mt-20 xl:mt-0">
        <img
          src="/assets/Svg/programming.svg"
          alt="My profile picture"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default About;
