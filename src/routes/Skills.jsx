import React from 'react'

const fundamentals = ['Unix & Bash', 'Git & GitHub', 'HTML', 'CSS', 'JavaScript', 'Testes Unitários 🡦 Jest'];
const front = ['React', 'Metodologias ágeis', 'React Testing Library', 'Redux'];
const back = ['SQL', 'Normalização e modelagem de Banco de Dados', 'Docker', 'MongoDB'];


export default function Skills() {
  return (
    <div className="category skills">
      <div className="stack fundamentals">
        <div>

        </div>
        <ul>
          { fundamentals.map((item) => <li>{item}</li>) }
        </ul>
      </div>

      <div className="stack front">
        <div>
          
        </div>
        <ul>
          { front.map((item) => <li>{item}</li>) }
        </ul>
      </div>

      <div className="stack back">
        <div>
          
        </div>
        <ul>
          { back.map((item) => <li>{item}</li>) }
        </ul>
      </div>

      <div className="stack bonus">
        <p>Bônus!!! Também sei tatuar e tocar pandeiro!</p>
      </div>
    </div>
  )
}
