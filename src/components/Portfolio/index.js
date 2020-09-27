import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'what-2-watch',
      description: '',
      link: "",
      repo: ""
    },
    {
      name: 'death-roll',
      description: '',
      link: "",
      repo: ""
    },
    {
      name: 'weather-app',
      description: '',
      link: "",
      repo: ""
    },
    {
      name: 'js-quiz',
      description: '',
      link: "",
      repo: ""
    },
    {
      name: 'password-generator',
      description: '',
      link: "",
      repo: ""
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