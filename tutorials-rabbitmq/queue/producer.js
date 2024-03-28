const amqplib = require('amqplib');
const ampq_url_cloud =
  'amqps://jxftvntr:uuH3--JQYmGQyPg4Wm2jzltn2owd_GAn@octopus.rmq3.cloudamqp.com/jxftvntr';
const amqp_url_docker = 'amqp://localhost:5672';

const sendQueue = async ({ msg }) => {
  try {
    // create connect
    const conn = await amqplib.connect(amqp_url_docker);

    // create channel
    const channel = await conn.createChannel();

    // create name queue
    const nameQueue = 'q2';

    // add queue to channel
    await channel.assertQueue(nameQueue, {
      durable: true, // true nghia la khoi dong lai khong mat
    });

    // send to queue
    await channel.sendToQueue(nameQueue, Buffer.from(msg), {
      //   expiration: '10000', // TTL - time to live
      persistent: true,
    });

    // close conn and channel
  } catch (error) {
    console.log(error.message);
  }
};

const msg = process.argv.slice(2).join(' ') || 'Hello';

sendQueue({ msg });
