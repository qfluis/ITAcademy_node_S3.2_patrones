// TODO: No se como hacerlo en consolas diferentes de manera automática...
const cp = require('child_process');

cp.fork(__dirname + '/servidor.js');
// esperamos 500 ms para iniciar cliente (para que queden ordenaditos los mensajes de la consola 🤣)
setTimeout(() => {
    cp.fork(__dirname + '/cliente.js');
},500);




