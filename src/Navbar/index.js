import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.scss'
import { useContext,useState,useEffect } from 'react';
import { ThemeContext } from '../Context/ThemeContext';




function Navbar(props) {



    const {logoAndre} = useContext(ThemeContext);
    const [scrollBlocked, setScrollBlocked] = useState(false);


    useEffect(() => {
      if (scrollBlocked) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [scrollBlocked]);


    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setScrollBlocked(true);
        setActive("nav__menu nav__active");
      } else  { 
        setActive("nav__menu"); 
        setScrollBlocked(false);}
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
    

   
    

    return ( 

      

                <nav className="nav no-select">
                      <div className='logo'> <img src={logoAndre} alt="Logo"/> </div>
                <div className='links--nav'> 
                    <ul className={active}>
                        <li className="nav__item animacao-underline"> <a href="#" className="nav__link">Inicio</a></li>
                        <li className="nav__item  animacao-underline"> <a href="#" className="nav__link">Sobre Mim</a></li>
                        <li className="nav__item animacao-underline"> <a href="#" className="nav__link">Experiencias</a></li>
                        <li className="nav__item animacao-underline"> <a href="#" className="nav__link">Projetos</a></li>
                        <li className="nav__item animacao-underline"> <a href="#contact" className="nav__link">Contato</a></li>
                    </ul>
                    <div onClick={navToggle} className={icon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    </div>
                    <div className='button--darkmode no-select' > {props.children} </div>
                    </nav>






     );
}

export default Navbar;