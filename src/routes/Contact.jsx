import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

function over({ target }) {
  if (target.className === "github-link") {
    const gitPic = document.querySelector('.github');
    gitPic.style.visibility = 'visible';
  } else {
    const inPic = document.querySelector('.linkedin');
    inPic.style.visibility = 'visible';
  }
}

function out({ target }) {
  if (target.className === "github-link") {
    const gitPic = document.querySelector('.github');
    gitPic.style.visibility = 'hidden';
  } else {
    const inPic = document.querySelector('.linkedin');
    inPic.style.visibility = 'hidden';
  }
}

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-links">
        <a
          href="https://github.com/Btriz"
          target="_blank"
          rel="noreferrer"
          className="github-link"
          onMouseOver={ over }
          onMouseOut={ out }
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/fagundesbeatriz/"
          target="_blank"
          rel="noreferrer"
          className="linkedin-link"
          onMouseOver={ over }
          onMouseOut={ out }
        >
          LinkedIn
        </a>
      </div>

      <img src={ github } alt="github" className="github" />
      <img src={ linkedin } alt="linkedin" className="linkedin" />
    </div>
  )
}
