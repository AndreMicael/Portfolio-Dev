import React from 'react';
import './about.scss'
import Botao from '../assets/button.js'
import Profile from '../img/profile.png'
import { Icone3D, IconeBS, IconeCSS, IconeGIT, IconeHTML,IconeEN, IconeNO,IconeJS, 
        IconePT,IconePS,IconeIL ,IconeREACT, IconeSASS, IconeTRE, IconeUI } from '../assets/imagens';


function About() {


   

    return (  
<div className='about--container'>
        <br/> <br/>
       <Botao>Contato</Botao>
       

   
    

    <div className='gap20'> </div>   
        
    <div className='about--container'> 
        <div className='about--img'>

      

        <img src={Profile} alt="Foto de Perfil">
                  
         </img>

        </div>
        
        <div className='about--text'>
        <h1>Sobre Mim.</h1>

        <p>

Laboris exercitation velit enim ea mollit aute do esse proident eiusmod est exercitation reprehenderit id. Cillum do aliqua irure dolor sunt officia magna adipisicing. Consequat sunt proident amet labore enim eiusmod pariatur do anim proident eiusmod dolore ut Lorem. Excepteur nisi magna deserunt exercitation consectetur sint excepteur ea non voluptate. Est velit Lorem consequat minim. Aliquip in sunt anim commodo.

Ipsum sit non ullamco ullamco labore incididunt dolore sint tempor amet dolor velit ea. Excepteur aliquip aute reprehenderit excepteur laboris. Nisi deserunt sit anim do sunt commodo est aliquip sit. Laboris occaecat dolore aliqua culpa voluptate eu ea eiusmod magna cillum veniam. Ex consequat velit consectetur esse aliquip culpa aliqua tempor duis aliqua enim est. Commodo aute aute consectetur sunt dolore fugiat do proident et nulla id nostrud sint voluptate.
</p>
        </div>
      
  
    </div>

<IconeHTML/>
<IconeCSS/>
<IconeBS/>
<IconeJS/>
<IconeREACT/>
<IconeSASS/>
<IconeGIT/>
<IconeUI/>
<IconePS/>
<IconeIL/>
<Icone3D/>
<IconeNO/>
<IconeTRE/>
<IconePT/>
<IconeEN/>
    
</div>
       

    );
}

export default About;


