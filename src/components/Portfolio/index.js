import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'what-2-watch',
      description: 'Full Stack Project',
      link: "https://sleepy-lake-06641.herokuapp.com/",
      repo: "https://github.com/brandonljackson23/what-2-watch"
    },
    {
      name: 'death-roll',
      description: 'Front End API Project',
      link: "https://brandonljackson23.github.io/death-roll/",
      repo: "https://github.com/brandonljackson23/death-roll"
    },
    {
        name: 'budget-tracker',
        description: 'Node/Express/Mongoose',
        link: "https://boiling-tundra-31423.herokuapp.com/",
        repo: "https://github.com/brandonljackson23/budget-tracker"
    },
    {
        name: 'Tech-Blog',
        description: 'MySQL/Sequelize',
        link: "https://thawing-harbor-96047.herokuapp.com/",
        repo: "https://github.com/brandonljackson23/tech-blog"
    },
    {
      name: 'weather-app',
      description: 'HTML/CSS/JS/API',
      link: "https://brandonljackson23.github.io/weather-dashboard/",
      repo: "https://github.com/brandonljackson23/weather-dashboard"
    },
    {
      name: 'js-quiz',
      description: 'HTML/CSS/JS',
      link: "https://brandonljackson23.github.io/coding-quiz/",
      repo: "https://github.com/brandonljackson23/coding-quiz"
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