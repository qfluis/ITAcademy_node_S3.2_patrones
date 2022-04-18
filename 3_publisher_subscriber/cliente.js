// CLIENTE ################################
const amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'hello';

        channel.assertQueue(queue, {
            durable: false
        });
        
        const consoleColor = "\x1b[36m%s\x1b[0m"; // \x1b[34m

        console.log(consoleColor,`CLIENT > Waiting for messages in ${queue}. To exit press CTRL+C`);

        channel.consume(queue, function(msg) {
            console.log(consoleColor, `CLIENT > Received ${msg.content.toString()}`);
        }, {
            noAck: true
        });
    });
});

