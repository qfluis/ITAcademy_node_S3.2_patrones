/* Utilitzant RabbitMQ com a element imprescindible crea una queue 
on una classe Publisher publiqui missatges que siguin llegits per 
una classe Subscriber. Mostra l'emissió i recepció de cada missatge 
en consoles diferents */

const amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', (error0, connection) => {
    if (error0){
        throw error0;
    }
    connection.createChannel((error1, channel) => {
        if (error1) {
            throw error1;
        }
        var queue = 'hello';
        var msg = 'Hello world';

        channel.assertQueue(queue, {
        durable: false
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });

    setTimeout(function() {
        connection.close();
        process.exit(0)
    }, 50000);
});