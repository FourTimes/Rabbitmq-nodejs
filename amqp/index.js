var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (err, connection) => {
  if (err) throw err;

  connection.createChannel((error, channel) => {
    if (error) throw error;

    var queue = "hello";
    var msg = "demo";

    channel.assertQueue(queue, {
      durable: false,
    });
    channel.sendToQueue(queue, Buffer.from(msg));

    console.log(" [x] Sent %s", msg);
  });
});


