import React, { Component } from 'react';
import Platos from './../Platos/Platos';
import Bebidas from './../Bebidas/Bebidas';
import Pedidos from './../Pedidos/Pedidos';
import { Route, Link } from 'react-router-dom';
import './Lienzo.css';

class Lienzo extends Component{
   render(){
        /* console.log(this.props.location);
        console.log(this.props.match);
        console.log(this.props.history); */
      return( 
         <div className="container-fluid">
            <header className="header row">
               <img src="./src/content/img/header.png" alt="header"/>
            </header>
            <div className="rest-jumbotron">
               <h2>Restaurant</h2>
            </div>
            <div className="contenido-restaurante clearfix">
              
                    <div className="tab-container">
                        <div className="tab-wrapper">
                            <Link to="/platos">Platos</Link>
                            <Link to="/bebidas">Bebidas</Link>
                        </div>
                        <div>
                            <Route path="/platos" component={Platos} />
                            <Route path="/bebidas" component={Bebidas} />
                        </div>
                    </div>
               
               <Pedidos />  
            </div>
         </div>
      )
   }
}

export default Lienzo;