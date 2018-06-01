import { extendObservable } from 'mobx';

class Tienda {
   constructor(){
      estendObservable(this,
         {
            platos: [
               {
                  nombre: 'nombrePlato',
                  descripcion: 'descripcion del plato',
                  precio: 20,
                  cantidad: 0
               },
               {
                  nombre: 'nombrePlato',
                  descripcion: 'descripcion del plato',
                  precio: 20,
                  cantidad: 0
               },
               {
                  nombre: 'nombrePlato',
                  descripcion: 'descripcion del plato',
                  precio: 20,
                  cantidad: 0
               }
            ]
         }
      );
   }
}

var VarTienda = new Tienda;

export default VarTienda;