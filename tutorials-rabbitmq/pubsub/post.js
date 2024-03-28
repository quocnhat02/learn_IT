const amqplib = require('amqplib');
const ampq_url_cloud =
  'amqps://jxftvntr:uuH3--JQYmGQyPg4Wm2jzltn2owd_GAn@octopus.rmq3.cloudamqp.com/jxftvntr';

const postVideo = async ({ msg }) => {
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

    // publish video
    await channel.publish(nameExchange, '', Buffer.from(msg));

    console.log(`[x] send ok: ${msg}`);

    setTimeout(() => {
      conn.close();
      process.exit(0);
    }, 2000);
  } catch (error) {
    console.log(error.message);
  }
};

const msg = process.argv.slice(2).join(' ') || 'Hello Exchange';

postVideo({ msg });
