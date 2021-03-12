import React from "react";
import "./style.css";
import profileImg from "../../portfolio/profile-img.jpg";
function About() {
  return (
    <div id="about-section">
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
          </div>

          <div className="row">
            <div className="col-lg-5" data-aos="fade-right">
              <img src={profileImg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-7 pt-3 pt-lg-0 content" data-aos="fade-left">
              <h3>Pavel Darii</h3>
              <p className="font-italic">Full-Stack Web Developer</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
