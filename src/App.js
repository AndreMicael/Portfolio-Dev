import './App.scss';
import Home from './Home'
import DarkMode from './Navbar/darkMode';
import Navbar from './Navbar';
import { useState } from 'react';


function App(props) {

  let [darkMode, setDarkMode] = useState('modo-claro');    

  const changeMode = () =>  {
          if (darkMode === 'modo-claro'){
            setDarkMode('modo-escuro')         
                    
          }
          else {
            setDarkMode('modo-claro')
          }
    }   
  

  return (

    <div className="App"> 
    <div className={darkMode}>


      <Navbar> <DarkMode> <div className='button-container--app' onClick={changeMode}></div> </DarkMode> </Navbar>
      <Home/>
      
      </div>
    </div>
  );
}
export default App;
