import React from 'react';

function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/brandonljackson23"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/brandonljackson23"
    },
    {
      name: "far fa-envelope",
      link: "mailto:brandonljackson23@gmail.com"
    },
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;