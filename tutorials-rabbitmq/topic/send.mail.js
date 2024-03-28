const amqplib = require('amqplib');
const ampq_url_cloud =
  'amqps://jxftvntr:uuH3--JQYmGQyPg4Wm2jzltn2owd_GAn@octopus.rmq3.cloudamqp.com/jxftvntr';

const sendMail = async () => {
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

    const args = process.argv.slice(2);
    const msg = args[1] || 'Fixed!';
    const topic = args[0];

    console.log(`msg: ${msg}, topic: ${topic}`);

    // publish video
    await channel.publish(nameExchange, topic, Buffer.from(msg));

    console.log(`[x] send ok: ${msg}`);

    setTimeout(() => {
      conn.close();
      process.exit(0);
    }, 2000);
  } catch (error) {
    console.log(error.message);
  }
};

sendMail();
