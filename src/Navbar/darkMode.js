import React from 'react';
import './darkMode.scss'
import { useState } from 'react';
import Sun from '../img/sun.png';
import Moon from '../img/moon.png';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';


function DarkMode(props) {

    const [circleToggle, setcircleToggle] = useState('0');
    const [circleIcon, setCircleIcon] = useState (Sun);
    const {theme, toggleTheme,toggleLogo} = useContext(ThemeContext);
    

    const handleClick = () => {
        setcircleToggle(!circleToggle);
        setCircleIcon(Moon);
        toggleTheme();
        toggleLogo();
        
      };
    
      const containerStyle = {        
        transform: circleToggle ? 'translateX(1%)' : 'translateX(115%)',        
      };  
 



    return ( 

        <div className='button--container' >  
            <div className='button--border' > 
            <div className='button--circle' style={containerStyle} onClick={handleClick}>{props.children}   
                <img src={circleIcon} alt="icon-darkmode"/>
            </div>
            </div>
        </div>

     );
}

export default DarkMode;