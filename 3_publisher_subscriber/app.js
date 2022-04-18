// TODO: No se como hacerlo en consolas diferentes de manera automática...

/* Utilitzant RabbitMQ com a element imprescindible crea una queue 
on una classe Publisher publiqui missatges que siguin llegits per 
una classe Subscriber. Mostra l'emissió i recepció de cada missatge 
en consoles diferents */


const cp = require('child_process');

cp.fork(__dirname + '/servidor.js');
// esperamos 500 ms para iniciar cliente (para que queden ordenaditos los mensajes de la consola 🤣)
setTimeout(() => {
    cp.fork(__dirname + '/cliente.js');
},500);




