/*
Crea una petita aplicació que calculi el cost d'uns quants 
Articles en euros a partir de les seves divises incials, 
aplicant diferents conversions que usin el Decorator del punt 
anterior
*/

const { currencyDecorator } = require('./decorator');

const articulosImportados = [
    { nombre: "game boy", precio: 150, moneda: 'GBP' },
    { nombre: "kindle", precio: 80, moneda: 'USD' },
    { nombre: "switch", precio: 300, moneda: 'CHF' },
    { nombre: "funda game boy", precio: 950, moneda: 'JPY' },
    { nombre: "ipad", precio: 1100, moneda: 'CAD' },
    { nombre: "samsung galaxy", precio: 5200, moneda: 'CNY' },
];

class Productos {
    constructor(){
        this.productos = [];
    }

    anadirProducto(producto) {
        this.productos.push(producto);
    }     
    
    mostrarProductos() {
        let respuesta = "#### LISTADO PRODUCTOS ####\n";
        for(let producto of this.productos){
            respuesta += `> ${producto.nombre} - ${producto.importe}💶\n`
        }
        return respuesta;
    }
}

// Aplicamos decorador currencyDecorator
const productos = new Productos();
productos.cambio = currencyDecorator();


for (let producto of articulosImportados) {
    const importeEUR = productos.cambio(producto.precio, producto.moneda);
    const productoNew = {nombre: producto.nombre, importe: importeEUR}
    productos.anadirProducto(productoNew);
}

console.log(productos.mostrarProductos());