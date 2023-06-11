import React from 'react';
import './darkMode.scss'
import { useState } from 'react';
import Sun from '../img/sun.png';
import Moon from '../img/moon.png';


function DarkMode(props) {

    const [circleToggle, setcircleToggle] = useState('0');
    const [circleIcon, setCircleIcon] = useState (Sun);

    

    const handleClick = () => {
        setcircleToggle(!circleToggle);
        setCircleIcon(Moon);
      };
    
      const containerStyle = {        
        transform: circleToggle ? 'translateX(1%)' : 'translateX(115%)',        
      };  
 



    return ( 

        <div className='button--container' >  
            <div className='button--border' > 
            <div className='button--circle' style={containerStyle} onClick={handleClick}>{props.children}   
                <img src={circleIcon}/>
            </div>
            </div>
        </div>

     );
}

export default DarkMode;