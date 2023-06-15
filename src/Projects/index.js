import React from 'react';
import './projects.scss'
import Botao from '../assets/button'
import Mockup from '../img/telas.png'

function Projects() {
    return (  

        <section className='projects--container'>

            <h1> Projetos Recentes </h1>

           <div className='container'>    {/* add row */}
            <div className='mockup--side'>  <img src={Mockup} alt="Projeto 01"/> </div>
            <div className='info--side'> 
            
            <h4> Projeto 01 </h4>
            <p> Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.</p>
            <h5> Tecnologias Usadas</h5>
            <h6> <div/> HTML | CSS | Javascript</h6>

            <div className='buttons'>
                    <button> Repositório Github </button>
                    <button> Site Demonstração </button>
                </div>


            </div>
            </div>  

            <div className='container row' >    {/* add row */}
            <div className='mockup--side'>  <img src={Mockup} alt="Projeto 01"/> </div>
            <div className='info--side'> 
            
            <h4> Projeto 01 </h4>
            <p> Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.</p>
            <h5> Tecnologias Usadas</h5>
            <h6><div/> HTML | CSS | Javascript</h6>

                <div className='buttons'>
                    <button> Repositório Github </button>
                    <button> Site Demonstração </button>
                </div>

            </div>
            </div>  
                <Botao>Ver Mais</Botao>
        </section>

    );
}

export default Projects;