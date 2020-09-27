
import React from 'react';
import coverImage from '../../assets/cover/cover-image.png';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Brandon Jackson</h1>
      <img src={coverImage} alt="leather background"></img>
      {props.children}
    </header>
  );
}

export default Header;