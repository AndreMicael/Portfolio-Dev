import './App.scss';
import Home from './Home'
import DarkMode from './Navbar/darkMode';
import Navbar from './Navbar';
import LogoReactDark from './img/logo2.svg';
import LogoReactLight from './img/logo.svg';
import React from 'react';
import { useState } from 'react';


function App(props) {

  let [darkMode, setDarkMode] = useState('modo-claro');    
  let [logoReact, setLogoReact] = useState(LogoReactLight);
  

  const changeMode = () =>  {
          if (darkMode === 'modo-claro'){
            setDarkMode('modo-escuro');
            setLogoReact(LogoReactDark); 
                    
          }
          else  {
            setDarkMode('modo-claro');
            
            setLogoReact(LogoReactLight);
          }
    }   
  

  return (

    <div className="App"> 
    <div className={darkMode}>


      <Navbar> <DarkMode> <div className='button-container--app' onClick={changeMode}></div> </DarkMode> </Navbar>
      <Home>  
      <img className='logo-react' src={logoReact} alt="Logo-React-Animado"></img>       
      </Home>

     
      
      </div>
    </div>
  );
}
export default App;
