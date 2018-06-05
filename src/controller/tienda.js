import { extendObservable } from 'mobx';

class Tienda {
   constructor(){
      extendObservable(this,
         {
            platos: [
               {
                  nombre: 'nombrePlato1',
                  descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                  precio: 120,
                  cantidad: 0
               },
               {
                  nombre: 'nombrePlato2',
                  descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                  precio: 220,
                  cantidad: 0
               },
               {
                  nombre: 'nombrePlato3',
                  descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
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