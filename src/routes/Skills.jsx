import React from 'react';
import { skillsDATA } from '../exports';

export default function Skills() {
  return (
    <div className="category skills">
      { skillsDATA.map(({ name, skills, icon }, index) => (
        <div
          key={ index }
          className={ `stack ${name}` }
        >
          <div
            style={ { backgroundImage: `url(${icon})` } }
          />

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
