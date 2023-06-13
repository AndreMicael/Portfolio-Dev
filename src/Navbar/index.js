
import './Navbar.scss'



function Navbar(props) {



   
    

    return ( 

        <nav>
            <div className='logo'> Logo </div>
            <div className='links--nav'> 
            
            <ul>
                <li> <a className='animacao-underline' href='http://www.google.com'>Inicio</a>  </li>
                <li> <a className='animacao-underline' href='http://www.google.com'>Habilidades</a> </li>
                <li> <a className='animacao-underline' href='http://www.google.com'>Experiencias</a> </li>
                <li> <a className='animacao-underline' href='http://www.google.com'>Projetos</a> </li>
                <li> <a className='animacao-underline' href='http://www.google.com'>Contatos</a> </li>

            </ul>

             </div>
            <div className='button--darkmode no-select' > {props.children} </div>
        </nav>

     );
}

export default Navbar;