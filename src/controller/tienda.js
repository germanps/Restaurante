import { extendObservable } from 'mobx';

class Tienda {
   constructor(){
      extendObservable(this,
         {
            platos: [
               {
                  nombre: 'Patatas bravas',
                  descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                  precio: 120,
                  cantidad: 0
               },
               {
                  nombre: 'Salchichas con tomate',
                  descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                  precio: 220,
                  cantidad: 0
               },
               {
                  nombre: 'Arroz con conejo',
                  descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                  precio: 320,
                  cantidad: 0
               }
            ],
            bebidas: [
                {
                    nombre: 'Seven Up',
                    descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                    precio: 20,
                    cantidad: 0
                },
                {
                    nombre: 'Cerveza',
                    descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                    precio: 40,
                    cantidad: 0
                },
                {
                    nombre: 'Vino',
                    descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                    precio: 55,
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