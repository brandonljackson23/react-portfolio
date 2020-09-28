import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <form action="https://drive.google.com/file/d/1HaFlKv5v7Vth4CFSD2XSTD9eTXBJJ8LW/view?usp=sharing" method="get" target="_blank" >
          <button type="submit">Download My Resume</button>
        </form>
        <br></br>
        <br></br> 
        <h2>Proficiencies</h2>
        <br></br>
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
        <h3>Backend</h3>
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