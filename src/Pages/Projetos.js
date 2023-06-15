import React from 'react'
import { useContext } from 'react';
import { Link  } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';


const Projetos =(props) => {
  
  document.title = 'Projetos | Portfólio André Sampaio';
  const {theme} = useContext(ThemeContext)



 
  return (
    <div>Projects
    <p> o tema é {theme} </p>
    
    <Link to="/">Voltar</Link>
  
    </div>
  )
}

export default Projetos