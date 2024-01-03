const fs = require('fs');

const readAllTask = () => {
  const buffer = fs.readFileSync('./app/data/task.json');
  const taskToString = buffer.toString();
  const taskToJson = JSON.parse(taskToString);

  return taskToJson;
};

module.exports = {
  readAllTask,
};
