import React from 'react';
import projects from '../services/projectDATA';
import btn from '../images/button.png';
import Flickity from 'react-flickity-component';

const flickityOptions = {
  autoPlay: 1500,
  initialIndex: 2,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
}

export default function Projects() {
  return (
    <div className="category projects">
      <Flickity
        className="carousel"
        elementType="div"
        options={ flickityOptions }
        reloadOnUpdate
        static> 
            { projects.map(({ name, imagePath, link }, index) => {
              return (
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
            }) }
       </Flickity>
    </div>
  )
}
