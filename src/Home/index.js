import React from 'react';
import './Home.scss';
import Balloons from './Balloons';
import GitHub from '../img/github.png';
import Linkedin from '../img/linkedin.png';
import Resume from '../img/resume.png';
import Curriculo from '../files/CV_André_Micael_Sampaio_Pinto.pdf';




function Home(props) {
  
    const gitOpen = () => {
        window.open('https://github.com/AndreMicael', '_blank');
        window.focus()
      };

      const LinkedinOpen = () => {
        window.open('https://www.linkedin.com/in/andremsampaio/', '_blank');
        window.focus()
      };

      const getCurriculo = () => {
        // Usando Javascript para puxar arquivo PDF 
        fetch(Curriculo).then(response => {
            response.blob().then(blob => {
                // Criando novo objeto do PDF
                const fileURL = window.URL.createObjectURL(blob);
                // Setando valores as propriedades
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'André Micael Sampaio Pinto - Curriculo Front-End.pdf';
                alink.click();
            })
        })
    }



    return ( 

        <section className='home--container no-select'>           
          <div className='logo--side'>          
           {props.children}           
          </div>
          <div className='info--side'> 
           <div className='info--text'>               
               <div className='info--line'> <div className='info--column'> <p> Prazer, me chamo André </p>  <h2> Front-End </h2>  </div> 
               <div className='info--button'>            
               
               <div onClick={gitOpen} className='button--git'>            

                   <Balloons> <p className='button--text'>  Conheça meus projetos</p></Balloons>
                   <img src={GitHub} alt="GitHub"></img>
                  </div>
                  

               <div onClick={LinkedinOpen} className='button--linkedin'> 
              
               <Balloons> <p className='button--text'>Vamos nos<br/> conhecer?</p></Balloons>
                   <img src={Linkedin} alt="Linkedin"></img>
               
               </div> 
               <div className='button--cv' onClick={getCurriculo}>


     
               
               <Balloons><p className='button--text'>Baixar Meu<br/> Curriculo  </p></Balloons>
                   <img src={Resume} alt="Curriculo"></img>

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