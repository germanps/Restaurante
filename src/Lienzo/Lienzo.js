import React, { Component } from 'react';

class Lienzo extends Component{
   render(){
      return(
         <div className="container">
            <div className="jumbotron">
               <h2>Restaurante</h2>
            </div>
            <div>
               <h4>Platos</h4>
               <h4>Pedidos</h4>
            </div>
         </div>
      )
   }
}

export default Lienzo;