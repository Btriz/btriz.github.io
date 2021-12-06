import React from 'react';
import { github, linkedin, over, out } from '../exports';

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

      <img src={ github } alt="github" className="github-link-img" />
      <img src={ linkedin } alt="linkedin" className="linkedin-link-img" />
    </div>
  )
}
