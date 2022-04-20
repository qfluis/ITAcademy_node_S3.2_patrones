const { Console } = require('console');
const fs = require('fs');
/*
Crea un Decorator en un arxiu que retorni una funció. 
Aquesta funció efectuarà una conversió de moneda a euros 
multiplicant pel coeficient de conversió del fitxer adjunt 
currency_conversions.json en funció de la divisa original
*/


const currencyDecorator = (objeto) => {    
    /* valores posibles moneda: USD, GPB, CHF, JPY, CAD, CNY    */
    
    /* OLD IMPLEMENTATION
    return (importe, moneda) =>{
        const tablaConversion = JSON.parse(fs.readFileSync(__dirname + "/currency_conversions.json"))
        const cambio = tablaConversion[moneda+"_EUR"];
        return importe * cambio;
    }*/    
    
    const tablaConversion = JSON.parse(fs.readFileSync(__dirname + "/currency_conversions.json"));
    for (let producto of objeto.productos) {
        producto.Leuros = producto.precio * tablaConversion[producto.moneda+"_EUR"];
    }    
}

module.exports.currencyDecorator = currencyDecorator;