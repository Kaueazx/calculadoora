import React from 'react';


const Botao = ({label ="0"}) => {
    function handleClick(label){
        alert(label)
    } 

    return ( 
        <button 
            className="Botao"
            onClick={() => handleClick(label)}
        >       
            {label}
        </button>
     );
}
 
export default Botao;