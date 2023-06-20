import React from 'react'; import './about.scss'; import Botao from '../assets/button.js'; import Profile from '../img/profile.png';
import { Icone3D,IconeBS, IconeCSS, IconeGIT, IconeHTML,IconeEN, IconeNO,IconeJS,IconePT,IconePS,IconeIL ,IconeREACT, IconeSASS, IconeTRE, IconeUI } from '../assets/imagens'; 


function About() { return (
<div className="about--container">
  <br />
  <br />  <br />
  <Botao>Contato</Botao>

  <div className="gap20"> </div>

  <div className="about--container-img">
    <div className="about--img">

      <img src={Profile} alt="Foto de Perfil"/>

    </div>
    <div className='about--title'> Sobre Mim</div>
    <div className="about--text">
    <p>

Estudante de Sistemas de Informação na UFMT, com foco em Front-End e UI/UX. Estágio na PGE-MT me deu experiência em Suporte Nível 1, 2 e 3, Infraestrutura e desenvolvimento web com Wordpress, HTML5 e CSS3. Apaixonado pelo Front-End, busco constantemente aprimorar habilidades e seguir tendências para soluções criativas e eficientes.

</p>     
    </div>


  </div>

  <div className="skills--section">
    <h1>Habilidades.</h1>
    <br />
    <div className="container--skills">
      <li className="skills">
        <ul> <div className="icon"><IconeJS /><p>Javascript</p> </div> </ul>
        <ul> <div className="icon"><IconeREACT /><p>React.js</p> </div> </ul>
        <ul> <div className="icon"><IconeBS /><p>Bootstrap</p></div> </ul>
        <ul> <div className="icon"><IconeHTML /><p>HTML</p> </div> </ul>
        <ul> <div className="icon"><IconeCSS /><p>CSS</p> </div> </ul>
        <ul> <div className="icon"><IconeSASS /><p>Sass</p> </div> </ul>
        <ul> <div className="icon"><IconeGIT /><p>Github</p> </div> </ul>
        <ul> <div className="icon"><IconeUI /><p>UI/UX</p> </div> </ul>
      </li>
    </div>
    <hr />
    <div className="container--skills">
      <li className="skills">
        <ul> <div className="icon"><IconePS /><p>Photoshop</p> </div> </ul>
        <ul> <div className="icon"><IconeIL /><p>Illustrator</p> </div> </ul>
        <ul> <div className="icon"> <Icone3D /><p>3D</p></div> </ul>
        <ul> <div className="icon"><IconeNO /><p>Notion</p> </div> </ul>
        <ul> <div className="icon"><IconeTRE /><p>Trello</p></div> </ul>
      </li>
    </div>
    <br />
    <h1>Idiomas.</h1>
    <br />
    <div className="container--skills-column">
      <li className="skills">
        <ul>
          <div className="icon"><IconePT /><p>Português(Nativo)</p> </div>
        </ul>
        <ul>
          <div className="icon"><IconeEN /><p>Inglês(Avançado)
              <h5>Writing, reading, listening e speaking.</h5></p>
          </div>
        </ul>

      </li>
    </div>

  </div>

  
</div>

); } export default About;