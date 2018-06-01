import { extendObservable } from 'mobx';

class Tienda {
   constructor(){
      extendObservable(this,
         {
            platos: [
               {
                  nombre: 'nombrePlato1',
                  descripcion: 'descripcion del plato',
                  precio: 20,
                  cantidad: 0
               },
               {
                  nombre: 'nombrePlato2',
                  descripcion: 'descripcion del plato',
                  precio: 20,
                  cantidad: 0
               },
               {
                  nombre: 'nombrePlato3',
                  descripcion: 'descripcion del plato',
                  precio: 20,
                  cantidad: 0
               }
            ]
         }
      );
   }
}

var VarTienda = new Tienda();

export default VarTienda;