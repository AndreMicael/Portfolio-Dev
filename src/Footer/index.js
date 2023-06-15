import React from 'react'
import Linkedin from '../img/icons/link.png'
import GitHub from '../img/icons/git.png'
import Email from '../img/icons/mail.png'
import './footer.scss'

const Footer = () => {
  return (

    <div className='footer--container'>

        
        <hr/>
        <div className='footer-icons'>
            <img src={Linkedin} alt="Linkedin link"></img>
            <img src={GitHub} alt="GitHub link"></img>
            <img src={Email} alt="Email"></img> <p>andremicael@gmail.com</p>
        </div>

    </div>
  )
}

export default Footer