import React from 'react';
import './darkMode.scss'
import { useState } from 'react';

import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';


function DarkMode(props) {

    const [circleToggle, setcircleToggle] = useState('0');
   
    const {icon,toggleIcon, toggleTheme,toggleLogo,toggleLogoAndre} = useContext(ThemeContext);



    const handleClick = () => {
        setcircleToggle(!circleToggle);
        toggleTheme();
        toggleLogo();
        toggleIcon();
        toggleLogoAndre();
        
        
      };
    
      const containerStyle = {        
        transform: circleToggle ? 'translateX(1%)' : 'translateX(112%)',        
      };  


      



    return ( 

        <div className='button--container' >  
            <div className='button--border' > 
            <div className='button--circle' style={containerStyle} onClick={handleClick}>{props.children}   
                <img src={icon} alt="icon-darkmode"/>
            </div>
            </div>
        </div>

     );
}

export default DarkMode;