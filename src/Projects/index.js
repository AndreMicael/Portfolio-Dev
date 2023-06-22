import React from 'react';
import './projects.scss'
import Botao from '../assets/button'
import { Link } from 'react-router-dom';
import Mockup from '../assets/Mockup';
import Thumb from '../img/telas.png';
import Projeto01 from "../img/projeto01.png"

function Projects() {
    return (  

        <section className='projects--container'>

            <h1> Projetos Recentes.</h1>
          
            <Mockup title="Projeto 01"
            description=" Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi."
            stacks="HTML | CSS | Javascript"
            gitlink='https://github.com/AndreMicael/Ion-Imoveis-LandingPage'
            sitelink='https://andremicael.github.io/Ion-Imoveis-LandingPage/'
            thumb={Thumb}
            projeto={Projeto01}
            position=''             
            ></Mockup>
            <div className='d-none d-sm-block'>
                 <Mockup title="Projeto 02"
            description=" Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi."
            stacks="HTML | CSS | Javascript"
            gitlink='https://github.com/AndreMicael/Ion-Imoveis-LandingPage'
            sitelink='https://andremicael.github.io/Ion-Imoveis-LandingPage/'
            thumb={Thumb}
            projeto={Projeto01}
            position='rows'             
            ></Mockup>   </div>         
          <br/>
               <Link to="/"> <Botao>Ver Mais</Botao> </Link>
        </section>

    );
}

export default Projects;