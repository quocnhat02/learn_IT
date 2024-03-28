const amqplib = require('amqplib');
const ampq_url_cloud =
  'amqps://jxftvntr:uuH3--JQYmGQyPg4Wm2jzltn2owd_GAn@octopus.rmq3.cloudamqp.com/jxftvntr';

const receiveMail = async () => {
  try {
    // create connect
    const conn = await amqplib.connect(ampq_url_cloud);

    // create channel
    const channel = await conn.createChannel();

    // create exchange
    const nameExchange = 'send_mail';

    await channel.assertExchange(nameExchange, 'topic', {
      durable: true,
    });

    // create queue
    const { queue } = await channel.assertQueue('', {
      exclusive: true,
    });

    console.log(`nameQueue: ${queue}`);

    // binding
    const args = process.argv.slice(2);
    if (!args.length) {
      process.exit(0);
    }

    /*
        * co nghia la phu hop vs bat ky tu nao
        # khop voi 1 or nhieu tu bat ky
    */

    console.log(`waiting queue ${queue}, topic: ${args}`);

    args.forEach(async (key) => {
      await channel.bindQueue(queue, nameExchange, key);
    });

    await channel.consume(
      queue,
      (msg) => {
        console.log(
          `Routing key:${msg.fields.routingKey}, msg: ${msg.content.toString()}`
        );
      },
      {
        noAck: true,
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

receiveMail();
