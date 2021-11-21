import React from 'react';
import skillsDATA from '../services/skillsDATA';

export default function Skills() {
  return (
    <div className="category skills">
      { skillsDATA.map(({ name, skills, icon }) => (
        <div className={ `stack ${name}` }>
          <div
            style={ { backgroundImage: `url(${icon})` } }
          />

          <ul>
            { skills.map((item) => <li>{ item }</li>) }
          </ul>
        </div>
      )) }

      <div className="stack bonus">
        <p>Bônus!!! Também sei tatuar e tocar pandeiro!</p>
      </div>
    </div>
  )
}
