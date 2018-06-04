import React, { Component } from 'react';
import Platos from './../Platos/Platos';
import Pedidos from './../Pedidos/Pedidos';
import './Lienzo.css';

class Lienzo extends Component{
   render(){
      return(
         <div className="container-fluid">
            <header className="header row">
               <img src="./src/content/img/header.png" alt="header"/>
            </header>
            <div className="rest-jumbotron">
               <h2>Restaurant</h2>
            </div>
            <div className="contenido-restaurante clearfix">
               <Platos />
               <Pedidos />  
            </div>
         </div>
      )
   }
}

export default Lienzo;