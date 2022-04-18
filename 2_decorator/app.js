

/*
Crea un Decorator en un arxiu que retorni una funció. 
Aquesta funció efectuarà una conversió de moneda a euros 
multiplicant pel coeficient de conversió del fitxer adjunt 
currency_conversions.json en funció de la divisa original
Crea una petita aplicació que calculi el cost d'uns quants 
Articles en euros a partir de les seves divises incials, 
aplicant diferents conversions que usin el Decorator del punt 
anterior
*/

const decoratorSaludo = () => {
    return () =>{
        console.log ("holiwi");
    }
}

class Prueba {
    constructor(){
        console.log("instanciado");
    }
    
}

const prueba = new Prueba();
prueba.saludo = decoratorSaludo();
prueba.saludo();