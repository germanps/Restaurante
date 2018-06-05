import React, { Component } from 'react';
//import Vartienda from './../Tienda/Tienda';
import './Pedidos.css';
import VarTienda from '../../controller/Tienda';
import { observer } from 'mobx-react';


class Pedidos extends Component{
    render(){
        let platosPedidos = [];
        let bebidasPedidos = [];
        
        /* const llenarPlatosPedidos =  */VarTienda.platos.forEach((plato, index) => {
            if(plato.cantidad > 0){
                platosPedidos.push(
                    <div className="pedido" key={index}>
                        <div className="pedido-wrapper">
                            <h4> {plato.nombre} </h4>
                            <div className="pedido-precio-cantidad">
                                <span>Cantidad: {plato.cantidad}</span>
                                <span className="plato-precio">Precio: {plato.cantidad*plato.precio}</span>
                            </div>
                        </div>
                    </div>
                );
            }
        });
       
        /* const llenarBebidasPedidos =  */VarTienda.bebidas.forEach((bebida, index) => {
            if(bebida.cantidad > 0){
                bebidasPedidos.push(
                    <div className="pedido" key={index}>
                        <div className="pedido-wrapper">
                            <h4> {bebida.nombre} </h4>
                            <div className="pedido-precio-cantidad">
                                <span>Cantidad: {bebida.cantidad}</span>
                                <span className="plato-precio">Precio: {bebida.cantidad*bebida.precio}</span>
                            </div>
                        </div>
                    </div>
                );
            }
        });
        return(
            <div className="pedidos-container col-md-6">
                <div className="pedidos-wrapper">
                    <div className="list-group pedidos-menu">
                        <h3>Pedidos</h3>
                        {platosPedidos}
                        {bebidasPedidos}
                    </div>
                </div>
            </div>
        )
    }
}
 
export default observer(Pedidos);