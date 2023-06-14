import React from "react";
import mySkillsArr from "../data/mySkills";

function About() {
  return (
    <section
      id="About"
      className="container mx-auto flex flex-col md:flex-row p-5 md:p-8 gap-x-16"
    >
      <div className="w-full md:w-1/2">
        <h4 className="text-3xl text-headerColor mb-14">01.About me</h4>
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
        <div className="text-textColor flex gap-x-16">
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

      <div className="Right flex-1 h-fit max-w-xl md:w-1/2 pb-5 ">
        <img
          src="/assets/svg/react.svg"
          alt="My profile picture"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default About;
