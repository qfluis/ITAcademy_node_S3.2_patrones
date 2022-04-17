// Clase calculadora
class Calculadora {
    constructor () {}
    suma({num1, num2}) {
        return num1 + num2;
    }
    resta({num1, num2}) {
        return num1 - num2;
    }
    multiplica({num1, num2}) {
        return num1 * num2;
    }
}

// TODO: leer json con estos datos
let params = {
    num1: 2,
    num2: 2
};
console.log("Parametros originales: ");
console.log(params);

// Ejecutar calculadora
const calculadora = new Calculadora();
console.log("Funciones calculadora: ");
console.log("Suma: ", calculadora.suma(params));
console.log("Resta: ", calculadora.resta(params));
console.log("Multiplica: ", calculadora.multiplica(params));

// Middleware
const { MiddlewareContainer } = require("./middlewarecontainer");
const app = new MiddlewareContainer(calculadora);
app.use((req)=>{
    req.num1 **= 2;
    req.num2 **= 2;
    console.log("  middleware1", req);
    return req;
});
app.use((req)=>{
    req.num1 **= 3;
    req.num2 **= 3;
    console.log("  middleware2", req);
    return req;
});
app.use((req)=>{
    req.num1 /= 2;
    req.num2 /= 2;
    console.log("  middleware3", req);
    return req;
});
console.log("Funciones middleware: ");
console.log("#Suma: ", app.suma(params));
console.log("#Resta: ", app.resta(params));
console.log("#Multiplicación: ", app.multiplica(params));



/*
Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui 
rebent els paràmetres en un JSON
Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions)
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió 
entre 2 dels operands incials en cadascuna de les operacions. 
Invoca les execucions de la suma, la resta i la multiplicació, 
de manera que es vagin mostrant per la consola les modificacions que es van 
fent als valors abans del resultat final
*/