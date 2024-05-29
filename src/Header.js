import React from 'react';
import './Header.css'


const Header = (props) => {
  return (
    console.log(props),
    <header>
      <nav className="nav-bar">
        <a className="header-logo" href="#">Anant Shukla</a>
        <button className="tempButton">
          <span>A</span>
          <span>B</span>
          <span></span>
        </button>
        <div>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Education">Education</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact Me</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export const A = 4;
export let b = 20;
export let c = 30;
export default Header;
