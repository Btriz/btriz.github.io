import React from 'react';
import { skillsDATA, fundamentals, frontend, backend } from '../exports';

function icon(name) {
  switch (name) {
    case "frontend":
      return frontend;
    case "backend":
      return backend;
    default:
      return fundamentals;
  }
}

export default function Skills() {
  return (
    <div className="skills">
      { skillsDATA.map(({ name, skills }, index) => (
        <div
          key={ index }
          className={ `stack ${name}` }
        >
          <img src={ icon(name) } alt={ name } />

          <ul>
            { skills.map((item, index) => (
              <li key={ index }>{ item }</li>
            )) }
          </ul>
        </div>
      )) }

      <div className="stack bonus">
        <p>Bônus!!! Também sei tatuar e tocar pandeiro!</p>
      </div>
    </div>
  )
}
