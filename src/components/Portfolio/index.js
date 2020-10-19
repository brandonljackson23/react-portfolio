import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'easy-peasy-recipeasy',
      description: 'Full Stack Project',
      link: "https://easypeasyrecipeasy.herokuapp.com/",
      repo: "https://github.com/brandonljackson23/easy-peasy-recipeasy"
    },
    {
      name: 'what-2-watch',
      description: 'Full Stack Project',
      link: "https://sleepy-lake-06641.herokuapp.com/",
      repo: "https://github.com/brandonljackson23/what-2-watch"
    },
    {
      name: 'death-roll',
      description: 'Front End API Project',
      link: "https://brandonljackson23.github.io/p1-death-roll/",
      repo: "https://github.com/brandonljackson23/p1-death-roll"
    },
    {
        name: 'budget-tracker',
        description: 'Node/Express/Mongoose',
        link: "https://boiling-tundra-31423.herokuapp.com/",
        repo: "https://github.com/brandonljackson23/budget-tracker"
    },
    {
        name: 'tech-blog',
        description: 'MySQL/Sequelize',
        link: "https://thawing-harbor-96047.herokuapp.com/",
        repo: "https://github.com/brandonljackson23/tech-blog"
    },
    {
      name: 'weather-dashboard',
      description: 'HTML/CSS/JS/API',
      link: "https://brandonljackson23.github.io/weather-app/",
      repo: "https://github.com/brandonljackson23/weather-app"
    },
    {
      name: 'js-quiz',
      description: 'HTML/CSS/JS',
      link: "https://brandonljackson23.github.io/js-quiz/",
      repo: "https://github.com/brandonljackson23/js-quiz"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;