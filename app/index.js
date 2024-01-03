const yargs = require('yargs');
const { readAllTask } = require('./model/task');

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
    console.log(readAllTask());
  },
});

yargs.parse();
