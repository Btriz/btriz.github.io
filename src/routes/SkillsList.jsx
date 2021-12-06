import React from 'react';
import { useParams } from 'react-router';
import { back, front, fundamentals, skillsDATA } from '../exports';

export default function Fundamentals() {
  const paramId = useParams().id;
  const skills = skillsDATA.find(({ id }) => id === paramId).skills;

  function icon(id) {
  switch (id) {
    case "front":
      return front;
    case "back":
      return back;
    default:
      return fundamentals;
  }
}

return (
  <div className="skills-outlet">
    <div>
      <img src={ icon(paramId) } alt={ paramId } />
    </div>

    <ul>
      { skills.map((item, index) => (
        <li key={ index }>{ item }</li>
      )) }
    </ul>
  </div>
  )
}
