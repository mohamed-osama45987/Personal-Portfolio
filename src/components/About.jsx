import React from "react";
import mySkillsArr from "../data/mySkills";

function About() {
  return (
    <section className="container border border-orange grid ">
      <div className="left-side">
        <h4>01.About me</h4>
        <p>
          Hello, my name is Mohamed I enjoy making websites.My interest in
          computers and programming specifically started when I was young I
          always enjoyed using computers for alot of purposes. Fast forward now
          I am a full-stack developer who create amazing user exprences for the
          web
        </p>

        <div className="mySkills">
          <h2>Some Technologies I Work With :-</h2>

          {mySkillsArr.map((skill) => {
            return (
              <li className="flex gap-1">
                <img src="/assets/Svg/Triangle.svg" alt="orange triangle" />
                {skill}
              </li>
            );
          })}
        </div>
      </div>

      {/* <div className="Right">
        <img
          src="/assets/images/Me.jpeg"
          alt="My profile picture"
          className="scale-50"
        />
      </div> */}
    </section>
  );
}

export default About;
