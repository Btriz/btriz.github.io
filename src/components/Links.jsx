import React from 'react';
import { Link } from 'react-router-dom';
import { over, out, skillsDATA } from '../exports';

export default function Links(linkClass) {
  return (
    <div className={ linkClass }>
      <Link
        to="/"
        data-content="INÍCIO"
      >
        INÍCIO
      </Link>
      <Link
        to={`/navigation/skills/${skillsDATA[0].id}`}
        className="skills-link"
        data-content="HABILIDADES"
        onMouseOver={ over }
        onMouseOut={ out }
      >
        HABILIDADES
      </Link>
      <Link
        to="/navigation/projects"
        className="projects-link"
        data-content="PROJETOS"
        onMouseOver={ over }
        onMouseOut={ out }
      >
        PROJETOS
      </Link>
      <Link
        to="/navigation/contact"
        className="contact-link"
        data-content="ME ACHE!"
        onMouseOver={ over }
        onMouseOut={ out }
      >
        ME ACHE!
      </Link>
    </div>
  );
}
