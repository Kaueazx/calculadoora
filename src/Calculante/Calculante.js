import React, { useState } from 'react';
import Botoes from '../Botoes/Botoes';
import Visao from '../Visao/Visao';
import './Calculante.css';

const Calculante = () => {
    
    const [operacao, setOperacao] = useState(0);
    const atualizaOperacao = () => {
        alert(label+5);
    }
    return (
        <div className="Calculante">
            <Visao resultado = {operacao}/>
            <Botoes />
            
        </div>
    );
}
 
export default Calculante;