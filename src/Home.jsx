import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page home">
      <h1>Oi, eu faço sites!</h1>
      <Link to="/menu">(1) Nova Mensagem!</Link>
    </div>
  )
}
