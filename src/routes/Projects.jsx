import React from 'react';
import { projectsDATA, btn } from '../exports';

const slides = [];

function pushSlides() {
  projectsDATA.forEach(({ name, imagePath, link }, index) => {
    slides.push(
      <div
        key={ index }
        className="project"
      >
        <a
          href={ link }
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-title">
            <p>{ name }</p>
            <img
              src={ btn }
              alt="frame illustrating a browser border" />
          </div>

          <div
            className="project-thumbnail"
            style={{backgroundImage: `url(${imagePath})`}}
          />
        </a>
      </div>
    );
  });
};

export default function Projects() {
  pushSlides();

  return (
      <div />
  )
}
