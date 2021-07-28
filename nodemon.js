const chokidar = require('chokidar');
const { spawn } = require('child_process')

const start = debounce(restart, 500);

let childProcess = null;
chokidar.watch(['index.js']).on('all', (event, path) => {
  console.log(event, path)
  start();
});

function restart() {
  childProcess && childProcess.kill();
  childProcess = spawn('node', ['index.js'], {
    stdio: [process.stdin, process.stdout, process.stderr]
  })
}

function debounce(f, delay) {
  let timer = null;
  return function() {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      f();
    }, delay);
  }
}

