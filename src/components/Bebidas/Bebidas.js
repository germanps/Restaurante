import React, { Component } from 'react';
import './Bebidas.css';
import VarTienda from './../../controller/Tienda';
import Ordenar from './../Ordenar/Ordenar';

class Bebidas extends Component {
    render(){
        let bebidas = [];
        VarTienda.bebidas.forEach((bebida, index)=>{
            bebidas.push(
                <div className="bebida" key={index}>
                    <div className="bebida-imagen">
                        <img className="bebida-img" role="presentation" src={bebida.direccion} />
                    </div>
                    <div className="bebida-contenido">
                        <h4 className="bebida-title">{bebida.nombre}</h4>
                        <p className="bebida-descripcion">{bebida.descripcion}</p>
                        <Ordenar precio={bebida.precio} indice={index} hacerPedido={ (indice_d, evento_d)=>{ VarTienda.bebidasEnLaOrden(indice_d, evento_d)} }/>
                    </div>
                </div>
            );
        });
        return(
            <div className="bebidas-container col-md-6">
                <div className="bebidas-wrapper">
                    <div className="list-group bebida-menu">
                        <h3>Bebidas</h3>
                        {bebidas}
                    </div>
                </div>
            </div>
        )
    }
}

export default Bebidas;