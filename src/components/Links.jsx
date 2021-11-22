import React from 'react';
import { Link } from 'react-router-dom';
import { over, out } from '../exports';

export default function MenuLinks(linkClass) {
  return (
    <div className={ linkClass }>
      <Link to="/">Início</Link>
      <Link
        to="/navigation/skills"
        className="skills-link"
        onMouseOver={ over }
        onMouseOut={ out }
      >
        Habilidades
      </Link>
      <Link
        to="/navigation/projects"
        className="projects-link"
        onMouseOver={ over }
        onMouseOut={ out }
      >
        Projetos
      </Link>
      <Link
        to="/navigation/contact"
        className="contact-link"
        onMouseOver={ over }
        onMouseOut={ out }
      >
        Me Ache!
      </Link>
    </div>
  );
}
