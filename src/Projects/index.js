import React from 'react';
import './projects.scss'
import Botao from '../assets/button'
import { Link } from 'react-router-dom';
import Mockup from '../assets/Mockup';
import Thumb from '../img/telas.png';
import Projeto01 from "../img/projeto01.png"
import Projeto02 from "../img/projeto02.png"

function Projects() {
    return (  
        
        <section className='projects--container'>
            <hr></hr>
            <h1> Projetos.</h1>
          
            <Mockup title="Ion Imoveis"
            description="Landing page sobre um novo lançamento imobiliário criado para prospectar clientes para a imobiliária."
            stacks="HTML | CSS | Javascript"
            gitlink='https://github.com/AndreMicael/Ion-Imoveis-LandingPage'
            sitelink='https://andremicael.github.io/Ion-Imoveis-LandingPage/'
            thumb={Thumb}
            projeto={Projeto01}
            position=''             
            ></Mockup>
            <div className='d-none d-sm-block'>
                 <Mockup title="Finans - Finanças Pessoais"
            description="Template criado para reproduzir a homepage de um site voltado a finanças pessoais."
            stacks="HTML | CSS"
            gitlink='https://github.com/AndreMicael/Finans-page'
            sitelink='https://andremicael.github.io/Finans-page/'
            thumb={Thumb}
            projeto={Projeto02}
            position='rows'             
            ></Mockup>   </div>         
          
               <Link to="/"> <Botao>Ver Mais</Botao> </Link>
        </section>

    );
}

export default Projects;