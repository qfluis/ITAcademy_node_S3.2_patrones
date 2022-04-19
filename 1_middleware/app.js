const fs = require('fs');
const { MiddlewareContainer } = require("./middlewarecontainer");
const Calculadora = require("./Calculadora.js");

// Cargar parametros
const params = JSON.parse(fs.readFileSync(__dirname + "/params.json", "utf8"));
console.clear();
console.log("Parametros originales: ", params);

// Ejecutar calculadora
const calculadora = new Calculadora();
console.log("### FUNCIONES CALCULADORA #############");
console.log("Suma: ", calculadora.suma(params));
console.log("Resta: ", calculadora.resta(params));
console.log("Multiplica: ", calculadora.multiplica(params));

// Añadir middlewares a la calculadora
const app = new MiddlewareContainer(calculadora);
app.use((req, next)=>{
    req.num1 **= 2;
    req.num2 **= 2;
    console.log("  middleware1", req);
    next(); // si todo ok
});
app.use((req, next)=>{
    req.num1 **= 3;
    req.num2 **= 3;
    console.log("  middleware2", req);
    next(); // si todo ok
});
app.use((req, next)=>{
    req.num1 /= 2;
    req.num2 /= 2;
    console.log("  middleware3", req);
    next();
});
console.log("### FUNCIONES CON MIDDLEWARES #########");
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