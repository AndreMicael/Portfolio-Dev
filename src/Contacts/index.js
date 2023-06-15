import React from 'react';
import Botao from '../assets/button';
import './Contacts.scss'

function Contacts() {

    const write = [

        "Escreva a sua mensagem aqui"

    ]
    return ( 

        <section className='contact--container'>
           
            <h1>Precisa de um Front-End? <br/> Vamos conversar! </h1>
         
            <div className="form--container"> 
          <form>

          <input className="form--contact" type="text" autocomplete="off" name="Nome" placeholder="José Pereira" required/> 
          <input className="form--contact" type="text" autocomplete="off" name="Nome" placeholder="Jose.Pereira@email.com" required/> 
          <textarea className="text--contact" name="subject" placeholder={write}/>

            <Botao> Enviar </Botao>

          </form>

          </div>

        </section>
        

     );
}

export default Contacts;