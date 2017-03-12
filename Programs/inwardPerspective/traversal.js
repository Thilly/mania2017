var CANVAS, CONTEXT, DEFAULT_PLANK_SIZE, INTERVAL;
var MAX_PLANKS = 10;
var DRAW_ALL_PLANKS = false;
var PLANKS_TO_DRAW = 4;
var ANIMATION_FRAMES = 100;
var FRAME_RATE = 1000/60;

var planks = [];
var plank_history = [];

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

window.onload = function() {
  CANVAS = document.getElementById('canvas');
  CONTEXT = CANVAS.getContext('2d');
  resizeCanvas();
  for(var i = 0; i < MAX_PLANKS; i++) {
    planks.push(new Plank(i));
  }

  CANVAS.addEventListener('click', handleClick);
  CANVAS.addEventListener('contextmenu', handleRightClick);
  draw(current_plank);
  renderQueriedData(current_plank, query(current_plank));
};

window.onresize = function() {
  resizeCanvas();
  draw(current_plank);
};

function handleRightClick(event) {
  event.preventDefault();
  if (plank_history.length > 0) {
    target_plank = getLastPlank();
    moveOut();
    draw(target_plank);
    current_plank = {
      size: target_plank.size,
      length: target_plank.length,
      stepX: target_plank.stepX,
      stepY: target_plank.stepY
    };
    renderQueriedData(current_plank, query(current_plank));
  }
  return false
}

function handleClick(event) { //todo: animate traversals
  event.preventDefault();
  target_plank = getClickedPlank(event);
  if(target_plank.length + PLANKS_TO_DRAW > planks.length) {
    planks.push(new Plank(planks.length));
  }
  plank_history.push(copyPlank(current_plank));
  moveIn();
  draw(target_plank);
  current_plank = {
    size: target_plank.size,
    length: target_plank.length,
    stepX: target_plank.stepX,
    stepY: target_plank.stepY
  };
  renderQueriedData(current_plank, query(current_plank));
  return false;
}

function query(plank) { // todo: geoSearch a datastore
  return plank.stepX + ',' + plank.stepY + '/' + plank.length;
}

function renderQueriedData(plank, data) { //todo: make queried data a 'drawable' for rendering different media
  CONTEXT.fillText(data, (plank.stepX * DEFAULT_PLANK_SIZE) + 100, (plank.stepY * DEFAULT_PLANK_SIZE) + 100)
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
  current_plank.size = DEFAULT_PLANK_SIZE * current_plank.length;
}

function moveOut() {
  current_plank.length -= 1;
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

function getLastPlank(){
  return plank_history.pop();
}

function copyPlank(in_plank) {
  return {
    size: in_plank.size,
    length: in_plank.length,
    stepX: in_plank.stepX,
    stepY: in_plank.stepY
  }
}

function resizeCanvas() {
  var size = (window.innerHeight > window.innerWidth)? window.innerWidth : window.innerHeight;
  size -= 10;
  CANVAS.width = size;
  CANVAS.height = size;
  DEFAULT_PLANK_SIZE = size;
  current_plank.size = DEFAULT_PLANK_SIZE;
}