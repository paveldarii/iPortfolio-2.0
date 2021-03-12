import React from "react";
import "./style.css";
import profileImg from "./profile.jpg";
import AnimatedText from "../AnimatedText";
function Hero() {
  return (
    <div id="hero-container">
      <img src={profileImg} alt="pavel darii" id="hero-img" />
      <div id="main-text-container">
        <h1 className="main-text">Hello, I'm Pavel!</h1>
        <h2 className="main-text"></h2>
      </div>
      <div className="social-links mt-3 text-center">
        <a href="https://github.com/paveldarii" className="twitter">
          <i className="icofont-linkedin"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pavel-darii-0aa546185/"
          className="linkedin"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/pavel.darii" className="facebook">
          <i className="bx bxl-facebook"></i>
        </a>
      </div>
    </div>
  );
}

export default Hero;
