class Productos {
    constructor(){
        this.productos = [];
    }

    anadirProducto(producto) {
        this.productos.push(producto);
    }     
    
    mostrarProductos() {
        console.table(this.productos);
        /*for(let producto of this.productos){
            respuesta += `> ${producto.nombre} - ${producto.importe}💶\n`
        }
        return respuesta;*/
    }
}

module.exports = Productos;