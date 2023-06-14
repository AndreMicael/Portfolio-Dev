import React  from 'react';




function Balloons(props) {

    const Baloes = (
        <div className='baloes sb8'>
          {props.children}        
        </div>
      );




    return ( 
        
        <div className='esconder--baloes'> {Baloes}</div>
       

     );
}

export default Balloons;