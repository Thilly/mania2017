var DEFAULT_STEP = 1;
var CANVAS, CONTEXT;
var MAX_PLANKS = 10;
var DRAW_ALL_PLANKS = false;
var PLANKS_TO_DRAW = 4;
var DEFAULT_PLANK_SIZE = 800;

var OFFSETX = 0;
var OFFSETY = 0;

var colors = [
  'black',
  'blue',
  'green',
  'red',
  'black',
  'blue',
  'green',
  'red',
]

var current_plank = {
  size: DEFAULT_PLANK_SIZE,
  length: 1,
  stepX: 0,
  stepY: 0
};

var target_plank = {
  size: DEFAULT_PLANK_SIZE,
  length: 1,
  stepX: 0,
  stepY: 0
};

var planks = [];

window.onload = function() {
  CANVAS = document.getElementById('canvas');
  CONTEXT = canvas.getContext('2d');

  for(var i = 0; i < MAX_PLANKS; i++) {
    planks.push(new Plank(i));
  }
  window.addEventListener('keydown', handlePress);
  CANVAS.addEventListener('click', handleClick);
  CANVAS.addEventListener('contextmenu', handleRightClick);
  draw(current_plank);
};

function handleRightClick(event) {  //todo: make move out currently next_plank query
  event.preventDefault();
  var new_target_plank = getClickedPlank(event);
  console.log(new_target_plank);
  return false
}

function handleClick(event) { //todo: animate traversal
  event.preventDefault();
  target_plank = getClickedPlank(event);
  console.log(target_plank);
  moveIn();
  draw(target_plank);
  current_plank = {
    size: target_plank.size,
    length: target_plank.length,
    stepX: target_plank.stepX,
    stepY: target_plank.stepY
  };
  return false;
}

function draw(target) {
  var start_plank = (current_plank.length > 1) ? current_plank.length - 1 : 1;
  var visible_planks = (DRAW_ALL_PLANKS) ? planks : planks.slice(start_plank, start_plank + PLANKS_TO_DRAW);
  var offsetX = target.stepX * DEFAULT_PLANK_SIZE;
  var offsetY = target.stepY * DEFAULT_PLANK_SIZE;

  CONTEXT.setTransform(1, 0, 0, 1, 0, 0);
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height);
  CONTEXT.translate(-offsetX, -offsetY);
  CONTEXT.font = '24px sans-serif';

  visible_planks.forEach(function(plank) {
    plank.draw(CONTEXT, offsetX, offsetY);
  });
}

function moveIn() {
  current_plank.length += 1;
  if (current_plank.length > MAX_PLANKS) {
    current_plank.length = MAX_PLANKS;
  }
  current_plank.size = DEFAULT_PLANK_SIZE * current_plank.length;
}

function getClickedPlank(event) {
  var xClick = (current_plank.stepX * DEFAULT_PLANK_SIZE) + event.x;
  var yClick = (current_plank.stepY * DEFAULT_PLANK_SIZE) + event.y;  // normailzed to context
  var next_length = current_plank.length + 1;
  return {
    size: DEFAULT_PLANK_SIZE / next_length,
    length: current_plank.length + 1,
    stepX: Math.floor(xClick / (DEFAULT_PLANK_SIZE * current_plank.length / next_length)),
    stepY: Math.floor(yClick / (DEFAULT_PLANK_SIZE * current_plank.length / next_length))
  };
}
