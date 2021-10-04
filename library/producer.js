const amqp = require("amqplib/callback_api");

const producer = () => {
  return (req, res, next) => {
    amqp.connect("amqp://localhost", (err, connection) => {
      if (err) throw err;
      connection.createChannel((error, channel) => {
        if (error) throw error;

        var queue = "hello";
        var msg = req.body;

        channel.assertQueue(queue, {
          durable: false,
        });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
        console.log(" [x] Sent %s", msg);
      });
    });
    next();
  };
};

module.exports = producer;
