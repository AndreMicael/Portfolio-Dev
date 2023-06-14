
import React, {useState} from 'react';
import './App.scss';
import Home from './Home'
import Navbar from './Navbar';
import About from './About-me';
import Jobs from './Jobs';
import Projects from './Projects'
import Contacts from './Contacts'
import LogoReactLight from './img/logo.svg'
import LogoReactDark from './img/logo2.svg'
import DarkMode from './Navbar/darkMode';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';

import Grids from './assets/grids';



function App() {

  const {theme, toggleTheme,toggleLogo,logoToggle} = useContext(ThemeContext)
    
  

  return (

    <div className="App"> 
 
    
     {/* <Grids> </Grids>   */}
    <div>
 

      <Navbar> <DarkMode> <div className='button-container--app'></div> </DarkMode> </Navbar>
      <Home>  
      <img className='logo-react' src={logoToggle} alt="Logo-React-Animado"></img>    
      
    

      </Home>
      <About> </About>
      <Jobs>  </Jobs>
      <Projects> </Projects>
      <Contacts> </Contacts>

     
      
      </div>
     
    </div>
  );
}
export default App;
