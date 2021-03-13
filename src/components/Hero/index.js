import React from "react";
import "./style.css";
import profileImg from "./profile.jpg";
import AnimatedText from "../AnimatedText";
function Hero() {
  return (
    <div>
      <img src={profileImg} alt="pavel darii" id="hero-img" />
      <div id="main-text-container">
        <h1 className="main-text">Hello, I'm Pavel!</h1>
        <h2 className="main-text"></h2>
      </div>
    </div>
  );
}

export default Hero;
