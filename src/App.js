
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



function App(props) {

  let [darkMode, setDarkMode] = useState('modo-claro');   
  let [logoChange, setLogoChange] = useState(LogoReactLight);    
 
  

  const changeMode = () =>  {
          if (darkMode === 'modo-claro'){
            setDarkMode('modo-escuro');
            setLogoChange(LogoReactDark);
                    
          }
          else  {
            setDarkMode('modo-claro');
            setLogoChange(LogoReactLight);
            
          }
    }   
  

  return (

    <div className="App"> 
    <div className={darkMode}>


      <Navbar> <DarkMode> <div className='button-container--app' onClick={changeMode}></div> </DarkMode> </Navbar>
      <Home>  
      <img className='logo-react' src={logoChange} alt="Logo-React-Animado"></img>    
      
    

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
