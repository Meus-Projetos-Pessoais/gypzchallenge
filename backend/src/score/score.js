//https://stackoverflow.com/questions/44423931/calling-python-script-with-node-js-express-server

const spawn = require('child_process').spawn;
const ls = spawn('python', ['../../score/score.py']);

ls.stdout.on('data', (data) => {
  console.log(data.toString());
});
