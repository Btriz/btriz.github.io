import React from 'react'
import { Link } from 'react-router-dom'
import { waves } from './exports';

export default function Home() {
  return (
    <div className="page home">
      <div className="front">
        <div className="hero-title-container">
          <h1>Oi, eu faço sites!</h1>
          <div />
        </div>

        <Link to="/menu">(1) Nova Mensagem!</Link>
      </div>

      <div className="background">
        <img src={ waves } alt="decorative" />
        <img src={ waves } alt="decorative" />
      </div>

      {/* <div className="background">
        <img src={ bg1 } alt="decorative" />
        <img src={ bg2 } alt="decorative" />
        <img src={ bg3 } alt="decorative" />
        <img src={ bg4 } alt="decorative" />
        <img src={ bg5 } alt="decorative" />
      </div> */}
    </div>
  )
}
