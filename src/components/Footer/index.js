import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="social-links mt-3 text-center footer">
      <a href="https://github.com/paveldarii" target="_blank" class="github">
        <i className="fa fa-github fa-lg"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/pavel-darii-0aa546185/"
        target="_blank"
        className="linkedin"
      >
        <i className="fa fa-linkedin fa-lg"></i>
      </a>
      <a
        href="https://www.facebook.com/pavel.darii"
        target="_blank"
        className="facebook"
      >
        <i className="fa fa-facebook fa-lg"></i>
      </a>
    </footer>
  );
}

export default Footer;
