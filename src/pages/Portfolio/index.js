import React from "react";
import "./style.css";
import PortfolioCard from "../../components/PortfolioCard";
import Wrapper from "../../components/Wrapper";
import img3 from "../../portfolio/portfolio-3.png";
import img2 from "../../portfolio/portfolio-2.png";
import img4 from "../../portfolio/portfolio-4.png";
import img5 from "../../portfolio/portfolio-5.png";
import everest from "../../portfolio/everest.gif";
function Portfolio() {
  return (
    <div id="portfolio-section">
      <Wrapper>
        <h2>Portfolio</h2>
      </Wrapper>
      <Wrapper>
        <p>
          Press <a href="https://github.com/paveldarii">here</a> to see the list
          of all my projects.
        </p>
      </Wrapper>

      <Wrapper>
        <PortfolioCard
          title="Everest Time Analyzer"
          image={everest}
          description="Everest Time Analyzer is a MERN stack JavaScript application that allows you track the time dedicated to any and all projects that are important to you. It offers features to review how you have spent your time across all of your tasks and projects, offering valuable insights to inform your decisions and guide your plans for the future."
          github="https://github.com/alane019/goals-productivity-tracker"
          deployed="https://everest-time-manager.herokuapp.com/"
        />
        <PortfolioCard
          title="Camping Planner"
          image={img3}
          description="Camping Planner application uses a series of technologies as (
                HTML, CSS, NODE.js, Handlebars, Pasportjs, Bcryptjs, Express,
                Mailgun, Mysql/Mysql2 and Sequelize) to create a functioning app
                that allows users to choose from a list of national parks and in
                turn get back a series of details about their trip location, add
                and create an equipment list and select certain parks as
                favorites to store and look back on later."
          github="https://github.com/amcmilne/Camping-Planner"
          deployed="https://thecoaxial.github.io/Your-Menu-for-Today/"
        />
        <PortfolioCard
          title="Your Menu For Today"
          image={img2}
          description="Using Foundation Framework and jQuery, me with other three team
        members made this site with the purpose to get a meal receipt
        and ingredients when we request it. We chose to use themealDB
        and thecocktailDB to create a website to search for recipes for
        meals and drinks. As well, as searching manually, the user can
        select a button to receive on the screen a random meal for
        Breakfast, Lunch or Dinner. There are also 2 buttons to select a
        random alcoholic or non-alcoholic cocktail."
          github="https://github.com/TheCoaxial/Your-Menu-for-Today"
          deployed="https://thecoaxial.github.io/Your-Menu-for-Today/"
        />
        <PortfolioCard
          title="Note Taker"
          image={img4}
          description="This application will be used to create, edit, and delete notes
        any time the inspiration or an idea is coming"
          github="https://github.com/paveldarii/inspiration-note-taker"
          deployed="https://serene-lowlands-03678.herokuapp.com/"
        />
        <PortfolioCard
          title="Team Contact Creator"
          image={img5}
          description="The project is designed for usage by programmers who just got a
        new job and wants to have all the contacts of his team members
        organized in one place. Therefore, to generate the list, he or
        she needs to use CLI commands described in the Git Repo."
          github="https://github.com/paveldarii/team-creator"
          deployed="https://github.com/paveldarii/team-creator"
        />
      </Wrapper>
    </div>
  );
}

export default Portfolio;
