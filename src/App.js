
import React from 'react';
import './App.scss';
import Home from './Home'
import Navbar from './Navbar';
import About from './About-me';
// import Jobs from './Jobs';
import Projects from './Projects'
import Contacts from './Contacts'
import DarkMode from './Navbar/darkMode';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';
//  import Grids from './assets/grids'
import Footer from './Footer';

function App() {

  const {logoToggle} = useContext(ThemeContext)
  document.title = 'Página Inicial | Portfólio André Sampaio';
  
  return (

    <div className="App"> 

        {/* <Grids> </Grids>     */}
    <div>
 
      <Navbar> <DarkMode> <div className='button-container--app'></div> </DarkMode> </Navbar>
      <Home>  
      <img className='logo-react' src={logoToggle} alt="Logo-React-Animado"></img></Home>   
      <About/> 
      <Projects/>
      <Contacts/> 
      <Footer/>
      
           
      </div>
     
    </div>
  );
}
export default App;
