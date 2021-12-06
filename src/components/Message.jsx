import React from 'react';
import { profile } from '../exports';

export default function Message(type) {
  return (
    <div className="message-container">
      <div className="message-image">
        <img src={ profile } alt="perfil" />
      </div>

      <p>
        Olá! Sou <strong>Beatriz Fagundes</strong>. <br />
        Estudo desenvolvimento web <br />
        e sou do Rio Grande do Norte, Brasil :)
      </p>
    </div>
  )
}
