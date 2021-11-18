import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuLinks() {
  return (
    <div>
      <Link to="/">Início</Link>
      <Link to="/navigation/skills">Habilidades</Link>
      <Link to="/navigation/projects">Projetos</Link>
      <Link to="/navigation/contact">Contato</Link>
    </div>
  )
}
