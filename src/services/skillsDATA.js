const skillsDATA = [
  {
    name: 'fundamentals',
    skills: ['Unix & Bash', 'Git & GitHub', 'HTML', 'CSS', 'JavaScript', 'Testes Unitários 🡦 Jest'],
  },
  {
    name: 'frontend',
    skills: ['React', 'Metodologias ágeis', 'React Testing Library', 'Redux'],
  },
  {
    name: 'backend',
    skills: ['SQL', 'Normalização e modelagem de Banco de Dados', 'Docker', 'MongoDB'],
  }
];

skillsDATA.forEach((item, index) => item['id'] = index);

export default skillsDATA ;
