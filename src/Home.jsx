import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page home">
      <div className="hero-title-container">
        <h1>Oi, eu faço sites!</h1>
        <div />
      </div>
      <Link to="/menu">(1) Nova Mensagem!</Link>
    </div>
  )
}
