var INSTRUCTIONS = "c <_taskName>: will create a new task\nd : will complete current task"
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
/**
 *  a task manager that uses super tasks to help minify tasks
 * @type {string}
 */

var currentPlank = '1/1';
var completed = {};  // if everything that exists has a place, place too will have a place, and so on ad infinitum.
var cronological = [];
var todo = {};
  todo[currentPlank] = process.argv[2] || 'originalTask';

rl.on('line', function(line) {
  var command = line.split(' ')[0];
  var taskName = line.split(' ')[1];

  if (command == 'c') { // but first, before this, sharpen the saw, super tasks
    addTask(taskName);
  } else if (command == 'd') { // completing individual steps, inching closer to a universe where the task is done
    removeTask()
  }
  console.log('currentPlank: ' + currentPlank);
  console.log('currentList:');
  console.log(todo);
});
console.log(INSTRUCTIONS);
console.log(todo);

function addTask(taskName) {
  var step = 1;
  var fraction = currentPlank.split('/')[1] * 2;
  while (get_key() in todo || get_key() in completed)
    step++;
  todo[get_key()] = taskName;
  currentPlank = get_key();
  function get_key() {
    return step + '/' + fraction;
  }
}

function removeTask() {
  var step = currentPlank.split('/')[0];
  var fraction = currentPlank.split('/')[1];
  completed[get_key()] = todo[get_key()];
  cronological.push(todo[get_key()]);
  delete todo[get_key()];

  fraction /= 2;
  step = 1;
  if (fraction < 1) {
    console.log('tasks complete');
    console.log(cronological);
    process.exit(0);
  }

  while (!(get_key() in todo))
    step++;
  currentPlank = get_key();

  function get_key() {
    return step + '/' + fraction;
  }
}
