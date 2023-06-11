import React from 'react';
import './Home.scss'
import LogoReact from '../img/logo.svg'
import Balloons from './Balloons';
import GitHub from '../img/github.png'
import Linkedin from '../img/linkedin.png'
import Resume from '../img/resume.png'


function Home() {

   

    return ( 

        <section className='home--container'>
           
          <div className='logo--side'> 
         
           <img src={LogoReact} alt="Logo-React-Animado"></img>

          </div>
          <div className='info--side'> 


           <div className='info--text'>
               
               <div className='info--line'> <div className='info--column'> <p> Prazer, me chamo André </p>  <h2> Front-End </h2>  </div> 
               <div className='info--button'>
               <div className='button--git'>
                  

                   <Balloons>Conheça meus projetos</Balloons>
                   <img src={GitHub}></img>

                  </div>
               <div className='button--linkedin'> 
              
               <Balloons> Vamos nos<br/> conhecer?</Balloons>
                   <img src={Linkedin}></img>
               
               </div> 
               <div className='button--cv'> 
               
               <Balloons>Ver Meu<br/> Curriculo  </Balloons>
                   <img src={Resume}></img>

                </div> 
               </div>
               
               </div>
               <h1> Developer </h1>
               <p className='info--description'> Tenho 25 anos, sou desenvolvedor com experiência em React, HTML, CSS para aplicações Web.</p>
           </div>

          </div>

          

        </section>

        
     );
}

export default Home;