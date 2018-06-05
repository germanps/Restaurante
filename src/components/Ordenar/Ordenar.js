import React, { Component } from 'react';
import './Ordenar.css';

class Ordenar extends Component{
    actualizarCantidad(e){
        this.props.hacerPedido(this.props.indice, e.target.value);
    }
    render(){
        return(
            <div className="ordenar-inputs">
                <div className="ordenar-inputs-cantidad">
                    <label> Cantidad: </label>
                    <input onChange={this.actualizarCantidad.bind(this)} type="number" min="0" max="20" placeholder="0"/>
                </div>
                
                <label className="ordenar-inputs-precio"> Precio: {this.props.precio}</label>
            </div>
        )
    }
}

export default Ordenar;