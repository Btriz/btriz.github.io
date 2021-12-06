import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
import { skillsDATA } from '../exports';

export default function Skills() {

  return (
    <div className="skills">
      <div className="skills-links">
        { skillsDATA.map(({ id, name }, index) => {
          return (
            <Link
              to={ `/navigation/skills/${id}` }
              key={ index }
              data-content={ name }
            >
              { name }
            </Link>
          );
        }) }
      </div>

      <div className="skills-list">
        <Outlet />

        <div className="bonus">
          <p>Bônus!!! Também sei tatuar e tocar pandeiro!</p>
        </div>
      </div>

    </div>
  )
}
