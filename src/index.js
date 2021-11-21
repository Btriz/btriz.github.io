import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home, Menu, Navigation, Skills, Projects, Contact } from './exports';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/navigation" element={ <Navigation /> }>
          <Route path="skills" element={ <Skills /> } />
          <Route path="projects" element={ <Projects /> } />
          <Route path="contact" element={ <Contact /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
