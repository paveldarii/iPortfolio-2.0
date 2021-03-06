import React from "react";
import ProgressBar from "../../components/ProgressBar";
import "./style.css";
import Wrapper from "../../components/Wrapper";
import pdfResume from "../../Pavel_Darii.pdf";
function Resume() {
  return (
    <div id="resume-section">
      <section id="resume" class="resume">
        <div class="container">
          <div class="section-title">
            <Wrapper>
              <h2>Resume</h2>
            </Wrapper>
            <Wrapper>
              {" "}
              <p>
                Click{" "}
                <a href={pdfResume} target="_black">
                  here
                </a>{" "}
                to download pdf version of my resume.{" "}
              </p>
            </Wrapper>
          </div>

          <div class="row">
            <div class="col-lg-6" data-aos="fade-up">
              <h3 class="resume-title">Summary</h3>
              <div class="resume-item pb-0">
                <h4>Pavel Darii</h4>
                <p>
                  <em>
                    Full Stack Web Developer adept in offering cutting edge
                    engineering solutions and effectively guiding developer
                    teams. Bringing forth expertise in managing all aspects of
                    the web development life cycle. Skilled in problem solving
                    and executing software tasks from start to finish. Proven
                    success in planning, executing, and spearheading complex IT
                    projects within estimated budgetary and time constrains.
                    <br />
                  </em>
                </p>
                <br />
                <ul>
                  <li>Columbus, OH, USA</li>
                  <li>(614) 641-3785</li>
                  <li>paveldarii@yahoo.com</li>
                </ul>
              </div>

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>FulL-Stack Web Development</h4>
                <h5>2020 - 2021</h5>
                <p>
                  <em>Ohio State University Bootcamp, Columbus, OH</em>
                </p>
              </div>
              <div class="resume-item">
                <h4>Associate of Sciences</h4>
                <h5>2018 - 2020</h5>
                <p>
                  <em>Columbus State Community Colege, Columbus, OH</em>
                </p>
              </div>
              <div class="resume-item">
                <h4>Bachelor in Construction Car Technology </h4>
                <h5>2014 - 2017</h5>
                <p>
                  <em>University of Petrosani, Petrosani, Romania</em>
                </p>
              </div>
              <div class="resume-item">
                <h4>High School Diploma </h4>
                <h5>2011 - 2014</h5>
                <p>
                  <em>
                    "A. Paunescu" High School in Cazanesti, Telenesti, Republic
                    of Moldova
                  </em>
                </p>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Technology Specialist</h4>
                <h5>Jun 2019 - Jan 2021</h5>
                <p>
                  <em>Spectrum, Columbus, Ohio</em>
                </p>
                <p>
                  * Installed TV, Internet, and Phone Services <br />
                  * Resolved every issue to make customer satisfied <br />
                  * Participated in discussions about how to automate job
                  allocation <br />
                  <br />
                </p>
              </div>
              <div class="resume-item">
                <h4>Direct Sales Representative</h4>
                <h5>Jun 2018 - May 2019</h5>
                <p>
                  <em>Spectrum, Columbus, Ohio</em>
                </p>
                <p>
                  * In January 2019 and February 2019, two times employee of the
                  month by having the most sales from around 100 salesmen.
                  <br />
                  * Dedication to get achieve top results.
                  <br />
                  * Continuous learning.
                  <br />
                  * Created new customers and offering great experience.
                  <br />
                  * Expressed clearly each idea.
                  <br />
                  * Created new ideas on how to interact with potential
                  customers, and shared them with the team.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" class="skills section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Skills</h2>
          </div>

          <div class="row skills-content">
            <div class="col-lg-6" data-aos="fade-up">
              <ProgressBar title="HTML" progress={90} color="#00FF00" />
              <ProgressBar title="Sass / CSS" progress={85} />
              <ProgressBar title="Bootstrap" progress={95} color="#00FF00" />
              <ProgressBar title="JS / Node" progress={90} color="#00FF00" />
              <ProgressBar title="JQuery" progress={90} color="#00FF00" />
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <ProgressBar title="Handlebars" progress={90} color="#00FF00" />
              <ProgressBar title="SQL" progress={80} />
              <ProgressBar title="MongoDB" progress={85} />
              <ProgressBar title="Express" progress={90} color="#00FF00" />
              <ProgressBar title="React" progress={85} />
            </div>
          </div>
        </div>
      </section>
      <section id="skills" class="skills section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Languages</h2>
          </div>

          <div class="row skills-content">
            <div class="col-lg-6" data-aos="fade-up">
              <ProgressBar title="Romanian" progress={99} color="#00FF00" />
              <ProgressBar title="English" progress={95} color="#00FF00" />
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <ProgressBar title="Russian" progress={95} color="#00FF00" />
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
    </div>
  );
}

export default Resume;
