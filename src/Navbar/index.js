
import './Navbar.scss'



function Navbar(props) {



   
    

    return ( 

        <nav>
            <div className='logo'> Logo </div>
            <div className='links--nav'> 
            
            <ul>
                <li> <a className='animacao-underline' href='#'>Inicio</a>  </li>
                <li> <a className='animacao-underline' href='#'>Habilidades</a> </li>
                <li> <a className='animacao-underline' href='#'>Experiencias</a> </li>
                <li> <a className='animacao-underline' href='#'>Projetos</a> </li>
                <li> <a className='animacao-underline' href='#'>Contatos</a> </li>

            </ul>

             </div>
            <div className='button--darkmode' > {props.children} </div>
        </nav>

     );
}

export default Navbar;