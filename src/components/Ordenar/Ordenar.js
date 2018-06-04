import React, { Component } from 'react';
import './Ordenar.css';

class Ordenar extends Component{
    render(){
        return(
            <div className="ordenar-inputs">
                <div className="ordenar-inputs-cantidad">
                    <label> Cantidad: </label>
                    <input type="number" min='0' max='20' placeholder="0"/>
                </div>
                
                <label className="ordenar-inputs-precio"> Precio: </label>
            </div>
        )
    }
}

export default Ordenar;