import React, {useState} from 'react'
import './mockup.scss'


const Mockup = (props) => {

  const criarEstiloInicial = (mockup) => {
    return {
      backgroundImage: `url(${mockup})`,
      backgroundSize: '80%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 5%',
      };
  };




  
  return (
    <div className={`container--projects ${props.position}`}>    {/* add row */}
    <div className='mockup--side'>
    <img style={criarEstiloInicial(props.projeto)} src={props.thumb} alt={`${props.title} - thumbnail `}></img>
    <div className='telas--mockup'> </div>
       </div>
    <div className='info--sider'> 
    
    <h4> {props.title} </h4>
    <p>{props.description}</p>
    <h5> Tecnologias Usadas</h5>
    <h6> <div/> {props.stacks} </h6>

    <div className='buttons'>
            <button><a href={props.gitlink} target="_blank"  rel="noreferrer" > Github </a>  </button>
            <button><a href={props.sitelink} target="_blank"  rel="noreferrer" > Demo </a>  </button>
        </div>


    </div>
    </div>  
  )
}

export default Mockup