import React from 'react'
import './mockup.scss'

const Mockup = (props) => {
  
  return (
    <div className={`container--projects ${props.position}`}>    {/* add row */}
    <div className='mockup--side'>
    <img src={props.thumb} alt={`${props.title} - thumbnail `}></img>
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