import React, { useState } from 'react'
import './ReadMore.scss'

const ReadMore = ({limit,children}) => {

    const [verMais, setVerMais] = useState(false);

    const toggleVer = () => {
        setVerMais(prevState => !prevState)
    }

    const text = children
    

  return (

    <div className='VerMais--button'>
        {verMais ? text : text.substr(0,limit)}{verMais? " " : "..."}
      
        <button onClick={toggleVer}> {verMais ? 'Ler Menos' : 'Ler Mais' } </button>
    </div>
  
  )
}

export default ReadMore