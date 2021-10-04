#!/usr/bin/env node

var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (err, connection) => {
  if (err) {
    throw err;
  }
  connection.createChannel((error, channel) => {
    if (error) {
      throw error;
    }
    var queue = "hello";
    channel.assertQueue(queue, {
      durable: false,
    });
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, (msg) => {
        const data = JSON.parse(msg.content.toString());
        const _data = data;
        console.log(_data.password)
        console.log(_data.user)
        console.log(_data.mobile)

      },
      {
        noAck: true,
      }
    );
  });
});
