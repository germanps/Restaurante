import React, { Component } from 'react';
import './Platos.css';
//import logo from './../../logo.svg';
import VarTienda from './../../controller/Tienda';

class Platos extends Component {
   render(){
      let platos = [];
      const llenarPlatos = VarTienda.platos.forEach((plato, index) => {
         platos.push(
            <div className="plato" key={index}>
               {plato.nombre}
            </div>
         );
      });
      return(
         <div className="platos col-md-6">
            <div className="panel panel-primary">
               <div className="list-group plato-menu">
                  {platos}
               </div>
            </div>
         </div>
      )
   }
}

export default Platos;