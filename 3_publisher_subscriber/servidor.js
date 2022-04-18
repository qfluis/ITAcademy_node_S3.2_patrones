
const amqp = require('amqplib/callback_api');

class Publisher {
    constructor(queueName, server) {
        this.queue = queueName;
        this.server = server;
        this.consoleColor = "\x1b[35m%s\x1b[0m"; 
    }
    sendMsg(msg){
        amqp.connect(this.server, (error0, connection) => {
            if (error0){
                throw error0;
            }
            connection.createChannel((error1, channel) => {
                if (error1) {
                    throw error1;
                }
                        
                channel.assertQueue(this.queue, {
                durable: false
                });
        
                channel.sendToQueue(this.queue, Buffer.from(msg));       
                console.log(this.consoleColor,`SERVER > Sent > ${msg}`);
            });
            setTimeout(function() {
                connection.close();
                process.exit(0)
            }, 50000);
        });        
    }
}

publisher = new Publisher("Futurama", "amqp://localhost")
publisher.sendMsg("Holiwi");
setTimeout(() => publisher.sendMsg("de"), 600);
setTimeout(() => publisher.sendMsg("Kiwi"), 800);



/*
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

        const consoleColor = "\x1b[35m%s\x1b[0m";        
        console.log(consoleColor,`SERVER > Start queue ${queue}`);

        channel.sendToQueue(queue, Buffer.from(msg));       

        console.log(consoleColor,`SERVER > Sent > ${msg}`);
    });

    setTimeout(function() {
        connection.close();
        process.exit(0)
    }, 50000);
});
*/