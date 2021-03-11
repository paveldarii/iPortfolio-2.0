import React from "react";

function Portfolio() {
  return (
    <div>
      <h1 className="text-center">Portfolio</h1>
      <section id="portfolio" class="portfolio section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Portfolio</h2>
            <p>
              Press <a href="https://github.com/paveldarii">here</a> to see the
              list of all my projects.
            </p>
          </div>

          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="col-lg-6 col-md-6 portfolio-item filter-app">
              <h4>Camping Planner</h4>
              <p>
                Camping Planner application uses a series of technologies as (
                HTML, CSS, NODE.js, Handlebars, Pasportjs, Bcryptjs, Express,
                Mailgun, Mysql/Mysql2 and Sequelize) to create a functioning app
                that allows users to choose from a list of national parks and in
                turn get back a series of details about their trip location, add
                and create an equipment list and select certain parks as
                favorites to store and look back on later.
                <br />
                <a href="https://github.com/amcmilne/Camping-Planner">
                  GitHub repository
                </a>{" "}
                <span> | </span>
                <a href="https://campingplanner.herokuapp.com/">
                  Deployed link
                </a>{" "}
              </p>
            </div>

            <div class="col-lg-6 col-md-6 portfolio-item ">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-3.png"
                  class="img-fluid"
                  alt="camping planner"
                />
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-3.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="camping planner"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://campingplanner.herokuapp.com/"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="col-lg-6 col-md-6 portfolio-item filter-app">
              <h4>Your Menu For Today</h4>
              <p>
                Using Foundation Framework and jQuery, me with other three team
                members made this site with the purpose to get a meal receipt
                and ingredients when we request it. We chose to use themealDB
                and thecocktailDB to create a website to search for recipes for
                meals and drinks. As well, as searching manually, the user can
                select a button to receive on the screen a random meal for
                Breakfast, Lunch or Dinner. There are also 2 buttons to select a
                random alcoholic or non-alcoholic cocktail.
                <br />
                themealdb -
                <a href="https://www.themealdb.com/api.ph">
                  https://www.themealdb.com/api.ph
                </a>{" "}
                <br />
                thecocktaildb -{" "}
                <a href="https://www.thecocktaildb.com/api.php">
                  https://www.thecocktaildb.com/api.php
                </a>{" "}
                <br />
                <a href="https://github.com/TheCoaxial/Your-Menu-for-Today">
                  GitHub repository
                </a>{" "}
                <span> | </span>
                <a href="https://thecoaxial.github.io/Your-Menu-for-Today/">
                  Deployed link
                </a>{" "}
              </p>
            </div>

            <div class="col-lg-6 col-md-6 portfolio-item ">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-2.png"
                  class="img-fluid"
                  alt="your menu for today site screenshot"
                />
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-2.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Your Menu For Today"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://thecoaxial.github.io/Your-Menu-for-Today/"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="col-lg-6 col-md-6 portfolio-item filter-app">
              <h4>Note Taker</h4>
              <p>
                This application will be used to create, edit, and delete notes
                any time the inspiration or an idea is coming
                <br />
                <a href="https://github.com/paveldarii/inspiration-note-taker">
                  GitHub repository
                </a>{" "}
                <span> | </span>
                <a href="https://serene-lowlands-03678.herokuapp.com/">
                  Deployed link
                </a>{" "}
              </p>
            </div>

            <div class="col-lg-6 col-md-6 portfolio-item ">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-4.png"
                  class="img-fluid"
                  alt="not taker page"
                />
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-4.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Your Menu For Today"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://serene-lowlands-03678.herokuapp.com/"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="col-lg-6 col-md-6 portfolio-item filter-app">
              <h4>Team Contact Creator</h4>
              <p>
                The project is designed for usage by programmers who just got a
                new job and wants to have all the contacts of his team members
                organized in one place. Therefore, to generate the list, he or
                she needs to use CLI commands described in the Git Repo.
                <br />
                <a href="https://github.com/paveldarii/team-creator">
                  GitHub repository
                </a>{" "}
              </p>
            </div>

            <div class="col-lg-6 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-5.png"
                  class="img-fluid"
                  alt="team creator"
                />
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-5.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="team creator"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://github.com/paveldarii/team-creator"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
