import React, { Component } from 'react';
import './Platos.css';
import logo from './../../logo.svg';
import VarTienda from './../../controller/Tienda';

class Platos extends Component {
    render(){
        let platos = [];
        /* const llenarPlatos =  */VarTienda.platos.forEach((plato, index) => {
            platos.push(
                <div className="plato" key={index}>
                    <img className="plato-img" role="presentation" src={logo} />  
                    <div className="plato-contenido">
                        <h4 className="plato-title">{plato.nombre}</h4>
                        <p className="plato-descripcion">{plato.descripcion}</p>
                        <div>Componente Ordenar.js</div>
                    </div>
                </div>
            );
        });
        return(
            <div className="platos-container col-md-6">
                <div className="platos-wrapper">
                    <div className="list-group plato-menu">
                        {platos}
                    </div>
                </div>
            </div>
        )
    }
}

export default Platos;