import React from 'react';
import './button.scss'

function Botao(props) {
    return (  
        

        <div className='home--button'> 
          
          <button> {props.children} </button>
          
          
          </div>
    );
}

export default Botao


;