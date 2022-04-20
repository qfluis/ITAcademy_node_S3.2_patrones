/*
Crea una petita aplicació que calculi el cost d'uns quants 
Articles en euros a partir de les seves divises incials, 
aplicant diferents conversions que usin el Decorator del punt 
anterior
*/
const Productos = require('./Productos.js');
const { currencyDecorator } = require('./decorator');

const productos = new Productos();
const articulosImportados = [
    { nombre: "game boy", precio: 150, moneda: 'GBP' },
    { nombre: "kindle", precio: 80, moneda: 'USD' },
    { nombre: "switch", precio: 300, moneda: 'CHF' },
    { nombre: "funda game boy", precio: 950, moneda: 'JPY' },
    { nombre: "ipad", precio: 1100, moneda: 'CAD' },
    { nombre: "samsung galaxy", precio: 5200, moneda: 'CNY' },
];

for (let producto of articulosImportados) {
    productos.anadirProducto(producto);
}
console.log("PRODUCTOS INICIALES");
productos.mostrarProductos();

// Aplicamos decorador currencyDecorator
currencyDecorator(productos);

console.log("PRODUCTOS INICIALES + PRECIO EUROS");
productos.mostrarProductos();

productos.anadirProducto( { nombre: "game boy color", precio: 180, moneda: 'GBP' } );
productos.anadirProducto( { nombre: "game boy color plus", precio: 220, moneda: 'GBP' } );

console.log("PRODUCTOS AÑADIDOS");
productos.mostrarProductos();

console.log("PRODUCTOS AÑADIDOS + PRECIO EUROS");
currencyDecorator(productos);
productos.mostrarProductos();






