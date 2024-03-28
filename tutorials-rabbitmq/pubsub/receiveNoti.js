const amqplib = require('amqplib');
const ampq_url_cloud =
  'amqps://jxftvntr:uuH3--JQYmGQyPg4Wm2jzltn2owd_GAn@octopus.rmq3.cloudamqp.com/jxftvntr';

const receiveNoti = async () => {
  try {
    // create connect
    const conn = await amqplib.connect(ampq_url_cloud);

    // create channel
    const channel = await conn.createChannel();

    // create exchange
    const nameExchange = 'video';

    await channel.assertExchange(nameExchange, 'fanout', {
      durable: true,
    });

    // create queue
    const { queue } = await channel.assertQueue('', {
      exclusive: true,
    });

    console.log(`nameQueue: ${queue}`);

    // binding
    await channel.bindQueue(queue, nameExchange, '');

    await channel.consume(
      queue,
      (msg) => {
        console.log(`msg:${msg.content.toString()}`);
      },
      {
        noAck: true,
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

receiveNoti();
