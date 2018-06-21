import { extendObservable } from 'mobx';
import datos from './firebaseController';

class Tienda {
   constructor(){
       self = this;
       datos.alimentos.once('value').then(function(snapshot){
            snapshot.forEach(el => {
                //const key = el.key;
                const value = el.val(); 
                self.platos.push(value);
            });
        });
       datos.bebidas.once('value').then(function(snapshot){
            snapshot.forEach(el => {
                //const key = el.key;
                const value = el.val(); 
                self.bebidas.push(value);
            });
       });
        extendObservable(this,
         {
            platos: [
               
            ],
            bebidas: [
                
            ]
         }
      );
   }

   //Modificador de las cantidades 
    ponerEnLaOrden(indicePlato, cantidadPlato){
        this.platos.forEach((el, index) => {
            if(indicePlato === index){
                //Si coinciden los indices actualizamos la cantidad
                this.platos[index].cantidad = cantidadPlato;
            }
        });
   }
   bebidasEnLaOrden(indiceBebida, cantidadBebida){
        this.bebidas.forEach((el, index) => {
            if(indiceBebida === index){
                //Si coinciden los indices actualizamos la cantidad
                this.bebidas[index].cantidad = cantidadBebida;
            }
        });
    }
}

var VarTienda = new Tienda();

export default VarTienda;