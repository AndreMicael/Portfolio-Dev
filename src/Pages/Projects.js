import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Projects = () => {
  document.title = 'Projetos | Portfólio André Sampaio';
  const {theme} = useContext(ThemeContext)
  return (
    <div>Projects
    <p> o tema é {theme} </p>
    </div>
  )
}

export default Projects