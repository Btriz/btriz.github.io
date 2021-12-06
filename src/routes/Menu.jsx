import React from 'react';
import { Links, Message, imgSkills, imgProjects, imgContact, blue } from '../exports';

export default function Menu() {
  return (
    <div
      className="page menu"
      style={{backgroundImage: `url(${blue})`}}
    >
      <Message />

      { Links("menu-links") }

      <img
        className="menu-img skills-link-img" src={ imgSkills } alt="skills" />
      <img className="menu-img projects-link-img" src={ imgProjects } alt="projects" />
      <img className="menu-img contact-link-img" src={ imgContact } alt="contact" />
    </div>
  )
}
