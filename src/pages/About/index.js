import React from "react";
import "./style.css";

function About() {
  return (
    <div id="about-section">
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <h2>About</h2>
          </div>

          <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
              <img
                src="../assets/img/profile-img.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Pavel Darii</h3>
              <p class="font-italic">Full-Stack Web Developer</p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="icofont-rounded-right"></i>{" "}
                      <strong>City:</strong> Columbus, Ohio
                    </li>
                    <li>
                      <i class="icofont-rounded-right"></i>{" "}
                      <strong>Degree: </strong> OSU Bootcamp Certificate in Web
                      Development
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="icofont-rounded-right"></i>{" "}
                      <strong>Phone:</strong> 614-641-3785
                    </li>
                    <li>
                      <i class="icofont-rounded-right"></i>{" "}
                      <strong>Email:</strong> paveldarii@yahoo.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
