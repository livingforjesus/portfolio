import React from "react";
import { Fade } from "react-reveal";
import { contactPageData } from "../../portfolio";
import "./AboutMe.css";

export default function AboutMe(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="about-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Who am I?
          </h1>
        </Fade>
      </div>
      <div className="about-info">
        <img
          src={require(`../../assests/images/${contactPageData.contactSection.profile_image_path}`)}
          alt=""
        />
        <div className="subTitle skills-text">
          <p>
            Hey there! I’m Vision Onyeaku. I’m a 15-year-old self-taught
            software engineer from Abuja, Nigeria. I’m passionate about
            learning, robotics, and software engineering. At age thirteen, I
            graduated from high school and am now a junior studying computer
            science at the National Open University of Nigeria. For the past few
            years, I’ve been working at various companies in a full-time
            capacity. I am currently a full-stack engineer at an American
            e-commerce startup, Rip Technologies. I’m also active in many online
            technical communities that keep me up to speed with the latest
            libraries, developments, and technology trends.
          </p>
          <p>
            In my pursuit of knowledge, I strive to push the boundaries of
            what’s possible in software engineering and robotics. My aspirations
            include furthering my education, possibly pursuing a higher degree,
            and cementing my place as a future robotics expert. Every project
            and interaction adds to this exciting journey, making me even more
            passionate about the limitless possibilities that lie ahead.
          </p>
          <p>
            Although most of my contributions are on private repositories, you
            can find my Github{" "}
            <a href="https://github.com/livingforjesus">here</a> and{" "}
            <a href="https://github.com/psecuresystem">here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
