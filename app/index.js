const yargs = require('yargs');
const fs = require('fs');

yargs.command({
  command: 'test',
  builder: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
  },
  handler: (args) => {
    const { title, description } = args;
    console.log(title);
    console.log(description);
  },
});

yargs.command({
  command: 'read-all',
  builder: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
  },
  handler: (args) => {
    const buffer = fs.readFileSync('task.json');
    console.log(buffer);
    // const { title, description } = args;
    // console.log(title);
    // console.log(description);
  },
});

yargs.parse();
