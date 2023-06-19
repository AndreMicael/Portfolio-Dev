import React, { useState } from 'react';
import './VerMais.scss'; // Arquivo CSS para estilização


export default function VerMaisBotao(props) {
  const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false);

  function toggleMostrarTexto() {
    setMostrarTextoCompleto(!mostrarTextoCompleto);
  }

  return (
    <div>
      {props.texto.length > 150 ? (
        <>
          {mostrarTextoCompleto ? (
            <p className="texto-completo">{props.texto}</p>
          ) : (
            <p className="texto-truncado">{props.texto.slice(0, 150)}...</p>
          )}
          <button onClick={toggleMostrarTexto}>
            {mostrarTextoCompleto ? 'Ver Menos' : 'Ver Mais'}
          </button>
        </>
      ) : (
        <p>{props.texto}</p>
      )}
    </div>
  );
}
