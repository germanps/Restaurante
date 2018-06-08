import React, { Component } from 'react';
import Platos from './../Platos/Platos';
import Bebidas from './../Bebidas/Bebidas';
import Pedidos from './../Pedidos/Pedidos';
import { Route, Link, Redirect } from 'react-router-dom';
import './Lienzo.css';

class Lienzo extends Component{
    activeLink(e){
        const platos = document.querySelector('.tab-platos');
        const bebidas = document.querySelector('.tab-bebidas')
        const link = e.target;
        if (link.classList.contains('tab-platos')) {
            platos.classList.add('active')
            bebidas.classList.remove('active')
        }else{
            bebidas.classList.add('active')
            platos.classList.remove('active')
        }        
    }
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
                            <ul className="tab-list">
                                <li className="tab-list-item">
                                    <Link to="/platos" className="tab-platos active" onClick={this.activeLink}>Platos</Link>
                                </li>
                                <li className="tab-list-item">
                                    <Link to="/bebidas" className="tab-bebidas" onClick={this.activeLink}>Bebidas</Link>
                                </li>
                            </ul>
                        
                        </div>
                        <div className="menu-wrapper">
                            <Redirect from="/" to="/platos" />
                            <Route exact path="/platos"  component={Platos} />
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