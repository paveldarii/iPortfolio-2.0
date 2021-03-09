import React from "react";
import "./style.css";
import profileImg from "./profile.jpg";
import AnimatedText from "../AnimatedText";
function Hero() {
  return (
    <div id="hero-container">
      <img src={profileImg} alt="pavel darii" id="hero-img" />
      <div id="main-text-container">
        <h1 className="main-text">Hi, I'm Pavel, and</h1>
        <h2 className="main-text">
          I'm <span id="job-name">Web Developer</span>
        </h2>
        <AnimatedText id="home-greeting"></AnimatedText>
      </div>
    </div>
  );
}

export default Hero;
