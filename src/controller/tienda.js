import { extendObservable } from 'mobx';

class Tienda {
   constructor(){
      extendObservable(this,
         {
            platos: [
               {
                  nombre: 'nombrePlato1',
                  descripcion: 'descripcion del plato',
                  precio: 120,
                  cantidad: 0
               },
               {
                  nombre: 'nombrePlato2',
                  descripcion: 'descripcion del plato',
                  precio: 220,
                  cantidad: 0
               },
               {
                  nombre: 'nombrePlato3',
                  descripcion: 'descripcion del plato',
                  precio: 320,
                  cantidad: 0
               }
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
}

var VarTienda = new Tienda();

export default VarTienda;