import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        <a href="www.linkedin.com/in/brandonljackson23">Download My Resume</a>
        </p>
        <h3>Frontend</h3>
        <ul className="skills">
          <li>HTML / CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React.js</li>
        </ul>
        <h3>Tools</h3>
        <ul className="skills">
          <li>VS Code</li>
          <li>GitHub</li>
          <li>GitLab</li>
          <li>JIRA</li>
          <li>Insomnia</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>GraphQL</li>
        </ul>
        <h3>Databases</h3>
        <ul className="skills">
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
        <h3>Servers</h3>
        <ul className="skills">
          <li>Heroku</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;