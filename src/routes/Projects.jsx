import React from 'react';
import projects from '../services/projectDATA';
import btn from '../images/button.png';

export default function Projects() {
  return (
    <div className="category projects">
      <div className="carrousel-wrap"> 
            { projects.map(({ name, imagePath, link }) => (
              <div className="project">
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
            )) }
       </div>
    </div>
  )
}
